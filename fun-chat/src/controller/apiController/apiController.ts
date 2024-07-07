import { IApiController } from './apiController.interface';
import User, {
  GeneralResponse,
  ServerErrorMessages,
  UserFromServer,
  UserMessageFromServer,
} from '../../api/api.interfaces';
import { Server } from '../../api/api.singleton';
import { LoginErrorMessages } from '../../constants/loginPageConstants';
import { PageIDs } from '../../constants/pagesConstants';
import { EventBusEvents } from '../../eventBus/eventBus.interface';
import EventBus from '../../eventBus/eventBus.singleton';
import { PagesRouter } from '../../router/router.singleton';
import SessionStorage from '../../sessionStorage/sessionStorage.singleton';
import { LoginErrorPopUp } from '../../ui/popups/loginErrorPopup/loginErrorPopup.singleton';

class ApiController implements IApiController {
  private messages: UserMessageFromServer[] = [];

  public async handleServerError(response: GeneralResponse<'error', string>): Promise<void> {
    const errorMessage = response.payload?.error;

    switch (errorMessage) {
      case ServerErrorMessages.USER_ALREADY_AUTHORIZED:
        LoginErrorPopUp.initialize();
        LoginErrorPopUp.open(LoginErrorMessages.CHOOSE_ANOTHER_USERNAME);
        break;

      case ServerErrorMessages.INCORRECT_PASSWORD:
        LoginErrorPopUp.initialize();
        LoginErrorPopUp.open(LoginErrorMessages.INCORRECT_PASSWORD);
        break;

      default:
        break;
    }
  }

  public async reestablishLoginForLoggedInUser(): Promise<void> {
    if (SessionStorage.getUserStatus()) {
      const user: User = SessionStorage.getUser() as User;

      await Server.loginUser(user);
    }
  }

  public async handleLoginResponse(
    response: GeneralResponse<'user', UserFromServer>
  ): Promise<void> {
    SessionStorage.setUserStatus(response.payload?.user.isLogined as boolean);

    PagesRouter.routeToPage(PageIDs.CHAT_PAGE);

    await Server.getActiveUsers();
    await Server.getInactiveUsers();
  }

  public async handleLogoutResponse(
    response: GeneralResponse<'user', UserFromServer>
  ): Promise<void> {
    SessionStorage.setUserStatus(response.payload?.user.isLogined as boolean);

    PagesRouter.routeToPage(PageIDs.LOGIN_PAGE);
  }

  public async handleExternalLogin(
    response: GeneralResponse<'user', UserFromServer>
  ): Promise<void> {
    EventBus.dispatch(EventBusEvents.EVENT_ADD_USER, response.payload?.user);
    EventBus.dispatch(
      EventBusEvents.EVENT_UPDATE_DIALOGUE_HEADER_USER_STATUS,
      response.payload?.user
    );
  }

  public async handleExternalLogout(
    response: GeneralResponse<'user', UserFromServer>
  ): Promise<void> {
    EventBus.dispatch(EventBusEvents.EVENT_DELETE_USER, response.payload?.user);
    EventBus.dispatch(EventBusEvents.EVENT_ADD_USER, response.payload?.user);
    EventBus.dispatch(
      EventBusEvents.EVENT_UPDATE_DIALOGUE_HEADER_USER_STATUS,
      response.payload?.user
    );
  }

  public async handleGetActiveUsersResponse(
    response: GeneralResponse<'users', UserFromServer[]>
  ): Promise<void> {
    response.payload?.users.forEach(async (user: UserFromServer) => {
      if (user.login !== SessionStorage.getUser()?.login) {
        await Server.getMessageHistory(user.login as string);

        EventBus.dispatch(EventBusEvents.EVENT_ADD_USER, user);
      }
    });
  }

  public async handleGetInactiveUsersResponse(
    response: GeneralResponse<'users', UserFromServer[]>
  ): Promise<void> {
    response.payload?.users.forEach(async (user: UserFromServer) => {
      await Server.getMessageHistory(user.login as string);

      EventBus.dispatch(EventBusEvents.EVENT_ADD_USER, user);
    });
  }

  public async handleSendMessageToUserResponse(
    response: GeneralResponse<'message', UserMessageFromServer>
  ): Promise<void> {
    if (response.id === null) {
      const isMessageToCurrentUser =
        response.payload?.message.to === SessionStorage.getUser()?.login;

      if (isMessageToCurrentUser) {
        EventBus.dispatch(
          EventBusEvents.EVENT_SHOW_MESSAGE_RECEIVED_NOTIFICATION,
          response.payload?.message
        );
      }

      this.messages.push(response.payload?.message as UserMessageFromServer);

      EventBus.dispatch(EventBusEvents.EVENT_ADD_RECEIVED_MESSAGE, response.payload?.message);
      EventBus.dispatch(EventBusEvents.EVENT_SHOW_NEW_MESSAGES_LINE, response.payload?.message);

      return;
    }

    this.messages.push(response.payload?.message as UserMessageFromServer);

    const messagesBeforeSendMessage: UserMessageFromServer[] = this.findMessagesBeforeSpecified(
      response.payload?.message.id as string
    );

    await Promise.all(
      messagesBeforeSendMessage.map(async (message: UserMessageFromServer) => {
        if (message.status.isReaded === false) {
          await Server.setMessageReadStatus(message.id);
        }
      })
    );

    EventBus.dispatch(EventBusEvents.EVENT_DELETE_NEW_MESSAGES_LINE, '');
    EventBus.dispatch(EventBusEvents.EVENT_ADD_MESSAGE, response.payload?.message);
    EventBus.dispatch(
      EventBusEvents.EVENT_DELETE_MESSAGE_RECEIVED_NOTIFICATION,
      response.payload?.message.to as string
    );
  }

  private findMessagesBeforeSpecified(messageId: string): UserMessageFromServer[] {
    const messageIndex = this.messages.findIndex((message) => message.id === messageId);

    if (messageIndex === -1) {
      return [];
    }

    return this.messages.slice(0, messageIndex);
  }

  public async handleGetMessageHistoryResponse(
    response: GeneralResponse<'messages', UserMessageFromServer[]>
  ): Promise<void> {
    this.messages = [];
    const userName = document.querySelector('.user-name')?.textContent as string;

    const isMessageHistoryEmpty = response.payload?.messages.length === 0;
    EventBus.dispatch(EventBusEvents.EVENT_OPEN_DIALOGUE_BOX, isMessageHistoryEmpty);

    response.payload?.messages.forEach(async (message: UserMessageFromServer) => {
      const isDialogueWithUserOpen = message.to === userName || message.from === userName;

      if (!isDialogueWithUserOpen) {
        return;
      }

      this.messages.push(message);

      EventBus.dispatch(EventBusEvents.EVENT_ADD_MESSAGE, message);
    });

    const firstUnreadMessage = response.payload?.messages.find(
      (message: UserMessageFromServer) => message.status.isReaded === false
    );

    const isFirstUnreadMessageIsCurrentUserMessage =
      firstUnreadMessage?.from === SessionStorage.getUser()?.login;

    if (firstUnreadMessage && !isFirstUnreadMessageIsCurrentUserMessage) {
      EventBus.dispatch(EventBusEvents.EVENT_SHOW_NEW_MESSAGES_LINE, firstUnreadMessage);

      EventBus.dispatch(
        EventBusEvents.EVENT_SHOW_MESSAGE_RECEIVED_NOTIFICATION,
        firstUnreadMessage
      );
    }
  }

  public async handleChangeMessageDeliveryStatus(): Promise<void> {
    const userName = document.querySelector('.user-name')?.textContent;

    if (userName) {
      await Server.getMessageHistory(userName);
    }
  }

  public async handleChangeMessageReadStatusResponse(): Promise<void> {
    const userName = document.querySelector('.user-name')?.textContent;

    if (userName) {
      await Server.getMessageHistory(userName);
    }

    EventBus.dispatch(EventBusEvents.EVENT_DELETE_NEW_MESSAGES_LINE, '');
  }

  public async handleMessageDeletionResponse(
    response: GeneralResponse<
      'message',
      {
        id: string;
      }
    >
  ): Promise<void> {
    if (response.id === null) {
      const userName = document.querySelector('.user-name')?.textContent;

      if (userName) {
        await Server.getMessageHistory(userName);
      }
    }

    EventBus.dispatch(EventBusEvents.EVENT_DELETE_MESSAGE, response.payload?.message.id);
  }
}

export default ApiController;
