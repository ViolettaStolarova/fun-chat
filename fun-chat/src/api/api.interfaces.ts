export type PayloadKeys = 'message' | 'messages' | 'user' | 'users' | 'error';

export interface GeneralResponse<T1 extends PayloadKeys, T2> {
  id: string | null;
  type: string;
  payload: { [key in T1]: T2 } | null;
}

export interface GeneralRequest {
  id: string | null;
  type: string;
  payload: object | null;
}

export default interface User {
  login: string;
  password: string;
}

export interface UserFromServer {
  login: string;
  isLogined: boolean;
}

export interface UserMessageStatus {
  isDelivered: boolean;
  isReaded: boolean;
  isEdited: boolean;
}

export interface UserMessage {
  to: string;
  text: string;
}

export interface UserMessageFromServer {
  id: string;
  from: string;
  to: string;
  text: string;
  datetime: number;
  status: UserMessageStatus;
}

export interface IApi {
  connect(): Promise<void>;

  loginUser(user: User): Promise<void>;
  logoutUser(user: User): Promise<void>;

  getActiveUsers(): Promise<void>;
  getInactiveUsers(): Promise<void>;

  sendMessageToUser(message: UserMessage): Promise<void>;

  getMessageHistory(userLogin: string): Promise<void>;

  setMessageReadStatus(messageId: string): Promise<void>;

  deleteMessage(messageId: string): Promise<void>;
}

export const enum MessageTypes {
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT',

  USER_EXTERNAL_LOGIN = 'USER_EXTERNAL_LOGIN',
  USER_EXTERNAL_LOGOUT = 'USER_EXTERNAL_LOGOUT',

  USER_ACTIVE = 'USER_ACTIVE',
  USER_INACTIVE = 'USER_INACTIVE',

  MSG_SEND = 'MSG_SEND',
  MSG_FROM_USER = 'MSG_FROM_USER',

  MSG_DELIVER = 'MSG_DELIVER',
  MSG_READ = 'MSG_READ',

  MSG_DELETE = 'MSG_DELETE',

  ERROR = 'ERROR',
}

export const enum ServerErrorMessages {
  USER_ALREADY_AUTHORIZED = 'a user with this login is already authorized',
  INCORRECT_PASSWORD = 'incorrect password',
}
