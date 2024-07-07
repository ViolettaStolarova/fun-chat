import { IEventsController } from './eventsController.interface';
import { UserFromServer, UserMessageFromServer } from '../../api/api.interfaces';
import { NOTIFICATION_ICON, UserStatuses } from '../../constants/chatPageConstants';
import { EventBusEvents } from '../../eventBus/eventBus.interface';
import EventBus from '../../eventBus/eventBus.singleton';
import SessionStorage from '../../sessionStorage/sessionStorage.singleton';
import UsersListItemView from '../../ui/chatPage/chatBox/main/usersSidebar/usersList/usersListItem/usersListItem';
import MessageItemView from '../../ui/chatPage/chatBox/main/chat/messageItems/messageItem/messageItemView';
import ChatView from '../../ui/chatPage/chatBox/main/chat/chatView';
import NewMessagesLine from '../../ui/chatPage/chatBox/main/chat/messageItems/newMessagesLine/newMessagesLineView';

class EventsController implements IEventsController {
  private unregisterAddUserEvent: () => void = () => {};

  private unregisterDeleteUserEvent: () => void = () => {};

  private unregisterAddMessageEvent: () => void = () => {};

  private unregisterDeleteMessageEvent: () => void = () => {};

  private unregisterShowMessageReceivedNotificationEvent: () => void = () => {};

  private unregisterDeleteMessageReceivedNotificationEvent: () => void = () => {};

  private unregisterAddReceivedMessageEvent: () => void = () => {};

  private unregisterSetCurrentUserNameEvent: () => void = () => {};

  private unregisterShowNewMessagesLineEvent: () => void = () => {};

  private unregisterDeleteNewMessagesLineEvent: () => void = () => {};

  public initialize(): void {
    this.subscribeSetCurrentUserNameEvent();

    this.subscribeAddUserEvent();
    this.subscribeDeleteUserEvent();
    this.subscribeDeleteMessageEvent();

    this.subscribeUpdateDialogueHeaderEvent();
    this.subscribeUpdateDialogueHeaderStatusEvent();

    this.subscribeOpenDialogueBoxEvent();

    this.subscribeAddMessageEvent();
    this.subscribeAddReceivedMessageEvent();

    this.subscribeShowMessageReceivedNotificationEvent();
    this.subscribeDeleteMessageReceivedNotificationEvent();

    this.subscribeShowNewMessagesLineEvent();
    this.subscribeDeleteNewMessagesLineEvent();

    EventBus.dispatch(
      EventBusEvents.EVENT_SET_CURRENT_USERNAME,
      SessionStorage.getUser()?.login as string
    );
  }

  public destruct(): void {
    this.unregisterSetCurrentUserNameEvent();

    this.unregisterAddUserEvent();
    this.unregisterDeleteUserEvent();
    this.unregisterDeleteMessageEvent();

    this.unregisterShowMessageReceivedNotificationEvent();
    this.unregisterDeleteMessageReceivedNotificationEvent();

    this.unregisterAddMessageEvent();
    this.unregisterAddReceivedMessageEvent();

    this.unregisterShowNewMessagesLineEvent();
    this.unregisterDeleteNewMessagesLineEvent();
  }

  private subscribeSetCurrentUserNameEvent(): void {
    this.unregisterSetCurrentUserNameEvent = EventBus.register(
      EventBusEvents.EVENT_SET_CURRENT_USERNAME,
      (userName: string) => {
        const currentUserName = document.querySelector('.current-userName') as HTMLElement;

        if (currentUserName) {
          currentUserName.innerHTML = userName;
        }
      }
    ).unregister;
  }

  private subscribeAddUserEvent(): void {
    this.unregisterAddUserEvent = EventBus.register(
      EventBusEvents.EVENT_ADD_USER,
      async (user: UserFromServer) => {
        EventBus.dispatch(EventBusEvents.EVENT_DELETE_USER, user);

        new UsersListItemView(user);
      }
    ).unregister;
  }

  private subscribeDeleteUserEvent(): void {
    this.unregisterDeleteUserEvent = EventBus.register(
      EventBusEvents.EVENT_DELETE_USER,
      (user: UserFromServer) => {
        const usersContainer = document.querySelector('.users-container');
        if (!usersContainer) {
          return;
        }

        const userItem = usersContainer.querySelector(`.user-item-${user.login}`);
        if (!userItem) {
          return;
        }

        usersContainer.removeChild(userItem);
      }
    ).unregister;
  }

  private subscribeUpdateDialogueHeaderEvent(): void {
    EventBus.register(EventBusEvents.EVENT_UPDATE_DIALOGUE_HEADER, (user: UserFromServer) => {
      const userName = document.querySelector('.user-name') as HTMLElement;
      userName.innerHTML = user.login;

      const userStatus = document.querySelector('.user-status') as HTMLElement;
      userStatus.innerHTML = user.isLogined ? UserStatuses.ONLINE : UserStatuses.OFFLINE;
    });
  }

  private subscribeUpdateDialogueHeaderStatusEvent(): void {
    EventBus.register(
      EventBusEvents.EVENT_UPDATE_DIALOGUE_HEADER_USER_STATUS,
      (user: UserFromServer) => {
        const userName = document.querySelector('.user-name') as HTMLElement;

        if (userName && userName.textContent === user.login) {
          const userStatus = document.querySelector('.user-status') as HTMLElement;
          userStatus.innerHTML = user.isLogined ? UserStatuses.ONLINE : UserStatuses.OFFLINE;
        }
      }
    );
  }

  private subscribeOpenDialogueBoxEvent(): void {
    EventBus.register(EventBusEvents.EVENT_OPEN_DIALOGUE_BOX, (isMessageHistoryEmpty: boolean) => {
      const userName = document.querySelector('.user-name') as HTMLElement;

      if (!userName.textContent) {
        return;
      }

      const dialogueBox = document.querySelector('.dialogue-box') as HTMLElement;
      dialogueBox.innerHTML = '';

      if (isMessageHistoryEmpty) {
        ChatView.createWriteFirstMessageNotification();
      }

      const sendMessageInput = document.querySelector('.input-send') as HTMLInputElement;
      sendMessageInput.disabled = false;
    });
  }

  private subscribeAddMessageEvent(): void {
    this.unregisterAddMessageEvent = EventBus.register(
      EventBusEvents.EVENT_ADD_MESSAGE,
      (message: UserMessageFromServer) => {
        const dialogueBoxNotification = document.querySelector(
          '.dialogue-box-notification'
        ) as HTMLElement;

        if (dialogueBoxNotification) {
          dialogueBoxNotification.innerHTML = '';
        }

        if (!message.text) {
          return;
        }

        const currentUser = SessionStorage.getUser()?.login;

        let cameFrom = '';
        if (message.from === currentUser) {
          cameFrom = 'current-user';
        } else {
          cameFrom = 'user';
        }

        new MessageItemView(message, cameFrom);
      }
    ).unregister;
  }

  private subscribeAddReceivedMessageEvent(): void {
    this.unregisterAddReceivedMessageEvent = EventBus.register(
      EventBusEvents.EVENT_ADD_RECEIVED_MESSAGE,
      (message: UserMessageFromServer) => {
        if (!message.text) {
          return;
        }

        const currentUser = SessionStorage.getUser()?.login;

        const cameFrom = 'user';

        const userName = document.querySelector('.user-name') as HTMLElement;

        if (userName.textContent === message.from && currentUser === message.to) {
          new MessageItemView(message, cameFrom);
        }
      }
    ).unregister;
  }

  private subscribeDeleteMessageEvent(): void {
    this.unregisterDeleteMessageEvent = EventBus.register(
      EventBusEvents.EVENT_DELETE_MESSAGE,
      (messageId: string) => {
        const dialogueBox = document.querySelector('.dialogue-box') as HTMLElement;

        const message = dialogueBox.querySelector(`[id="${messageId}"]`) as HTMLElement;

        if (!message) {
          return;
        }

        message.remove();
      }
    ).unregister;
  }

  private subscribeShowMessageReceivedNotificationEvent(): void {
    this.unregisterShowMessageReceivedNotificationEvent = EventBus.register(
      EventBusEvents.EVENT_SHOW_MESSAGE_RECEIVED_NOTIFICATION,
      (message: UserMessageFromServer) => {
        const notification = document.querySelector(`.notification-${message.from}`);

        if (notification) {
          notification.innerHTML = NOTIFICATION_ICON;
        }
      }
    ).unregister;
  }

  private subscribeDeleteMessageReceivedNotificationEvent(): void {
    this.unregisterDeleteMessageReceivedNotificationEvent = EventBus.register(
      EventBusEvents.EVENT_DELETE_MESSAGE_RECEIVED_NOTIFICATION,
      (userItemName: string) => {
        const notification = document.querySelector(`.notification-${userItemName}`);

        if (notification) {
          notification.innerHTML = '';
        }
      }
    ).unregister;
  }

  private subscribeShowNewMessagesLineEvent(): void {
    this.unregisterShowNewMessagesLineEvent = EventBus.register(
      EventBusEvents.EVENT_SHOW_NEW_MESSAGES_LINE,
      (firstUnreadMessage: UserMessageFromServer) => {
        const dialogueBox = document.querySelector('.dialogue-box') as HTMLElement;
        const newMessagesLine = document.querySelector('.new-messages-line') as HTMLElement;

        if (newMessagesLine) {
          const linePosition = newMessagesLine.offsetTop;

          dialogueBox.scrollTop = linePosition;

          return;
        }

        new NewMessagesLine(firstUnreadMessage);
      }
    ).unregister;
  }

  private subscribeDeleteNewMessagesLineEvent(): void {
    this.unregisterDeleteNewMessagesLineEvent = EventBus.register(
      EventBusEvents.EVENT_DELETE_NEW_MESSAGES_LINE,
      () => {
        const newMessagesLine = document.querySelector('.new-messages-line') as HTMLElement;

        if (newMessagesLine) {
          newMessagesLine.remove();
        }
      }
    ).unregister;
  }
}

export default EventsController;
