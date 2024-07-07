import { SERVER_URL } from '../constants/serverConstant';
import ApiController from '../controller/apiController/apiController';
import { ConnectionPopUp } from '../ui/popups/connectionPopup/connectionPopup.singleton';
import User, { UserMessage, MessageTypes, GeneralRequest, IApi } from './api.interfaces';

class Api implements IApi {
  private serverURL: string = SERVER_URL;

  private apiController = new ApiController();

  private socket: WebSocket;

  private reconnectionAttempt = 0;

  constructor() {
    this.socket = new WebSocket(this.serverURL);

    this.socket.onerror = () => {
      this.connect();
    };
  }

  public async connect(): Promise<void> {
    this.socket.onopen = () => {
      ConnectionPopUp.close();

      this.reconnectionAttempt = 0;

      this.apiController.reestablishLoginForLoggedInUser();
    };

    this.socket.onmessage = (event) => {
      (async () => {
        await this.handleMessage(event);
      })();
    };

    this.socket.onerror = () => {
      this.socket = new WebSocket(this.serverURL);

      this.reconnect();
    };

    this.socket.onclose = () => {
      this.socket = new WebSocket(this.serverURL);

      this.reconnect();
    };
  }

  private async reconnect(): Promise<void> {
    if (this.reconnectionAttempt < 1) {
      ConnectionPopUp.initialize();
      ConnectionPopUp.open();
    }

    this.reconnectionAttempt += 1;

    await this.connect();
  }

  private async handleMessage(event: MessageEvent): Promise<void> {
    const response = JSON.parse(event.data);

    switch (response.type) {
      case MessageTypes.USER_LOGIN:
        await this.apiController.handleLoginResponse(response);
        break;

      case MessageTypes.USER_LOGOUT:
        await this.apiController.handleLogoutResponse(response);
        break;

      case MessageTypes.USER_EXTERNAL_LOGIN:
        await this.apiController.handleExternalLogin(response);
        break;

      case MessageTypes.USER_EXTERNAL_LOGOUT:
        await this.apiController.handleExternalLogout(response);
        break;

      case MessageTypes.USER_ACTIVE:
        await this.apiController.handleGetActiveUsersResponse(response);
        break;

      case MessageTypes.USER_INACTIVE:
        await this.apiController.handleGetInactiveUsersResponse(response);
        break;

      case MessageTypes.MSG_SEND:
        await this.apiController.handleSendMessageToUserResponse(response);
        break;

      case MessageTypes.MSG_FROM_USER:
        await this.apiController.handleGetMessageHistoryResponse(response);
        break;

      case MessageTypes.MSG_DELIVER:
        await this.apiController.handleChangeMessageDeliveryStatus();
        break;

      case MessageTypes.MSG_READ:
        await this.apiController.handleChangeMessageReadStatusResponse();
        break;

      case MessageTypes.MSG_DELETE:
        await this.apiController.handleMessageDeletionResponse(response);
        break;

      case MessageTypes.ERROR:
        await this.apiController.handleServerError(response);
        break;

      default:
        break;
    }
  }

  private async sendMessage(request: object): Promise<void> {
    return new Promise((resolve) => {
      if (this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify(request));
        resolve();
      }
    });
  }

  public async loginUser(user: User): Promise<void> {
    const request: GeneralRequest = {
      id: MessageTypes.USER_LOGIN,
      type: MessageTypes.USER_LOGIN,
      payload: {
        user,
      },
    };

    await this.sendMessage(request);
  }

  public async logoutUser(user: User): Promise<void> {
    const request: GeneralRequest = {
      id: MessageTypes.USER_LOGOUT,
      type: MessageTypes.USER_LOGOUT,
      payload: {
        user,
      },
    };

    await this.sendMessage(request);
  }

  public async getActiveUsers(): Promise<void> {
    const request: GeneralRequest = {
      id: MessageTypes.USER_ACTIVE,
      type: MessageTypes.USER_ACTIVE,
      payload: null,
    };

    await this.sendMessage(request);
  }

  public async getInactiveUsers(): Promise<void> {
    const request: GeneralRequest = {
      id: MessageTypes.USER_INACTIVE,
      type: MessageTypes.USER_INACTIVE,
      payload: null,
    };

    await this.sendMessage(request);
  }

  public async sendMessageToUser(message: UserMessage): Promise<void> {
    const request: GeneralRequest = {
      id: MessageTypes.MSG_SEND,
      type: MessageTypes.MSG_SEND,
      payload: {
        message,
      },
    };

    await this.sendMessage(request);
  }

  public async getMessageHistory(userLogin: string): Promise<void> {
    const request: GeneralRequest = {
      id: MessageTypes.MSG_FROM_USER,
      type: MessageTypes.MSG_FROM_USER,
      payload: {
        user: {
          login: userLogin,
        },
      },
    };

    await this.sendMessage(request);
  }

  public async setMessageReadStatus(messageId: string): Promise<void> {
    const request: GeneralRequest = {
      id: MessageTypes.MSG_READ,
      type: MessageTypes.MSG_READ,
      payload: {
        message: {
          id: messageId,
        },
      },
    };

    await this.sendMessage(request);
  }

  public async deleteMessage(messageId: string): Promise<void> {
    const request: GeneralRequest = {
      id: MessageTypes.MSG_DELETE,
      type: MessageTypes.MSG_DELETE,
      payload: {
        message: {
          id: messageId,
        },
      },
    };

    await this.sendMessage(request);
  }
}

export default Api;
