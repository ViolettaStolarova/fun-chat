export interface Registry {
  unregister: () => void;
}

export interface Callable {
  [key: string]: () => void;
}

export interface Subscriber {
  [key: string]: Callable;
}

export interface IEventBus {
  dispatch<T>(event: string, arg?: T): void;
  register(event: string, callback: () => void): Registry;
}

export enum EventBusEvents {
  EVENT_SET_CURRENT_USERNAME = 'EventSetCurrentUsername',

  EVENT_ADD_USER = 'EventAddUser',
  EVENT_DELETE_USER = 'EventDeleteUser',

  EVENT_UPDATE_DIALOGUE_HEADER = 'EventUpdateDialogueHeader',
  EVENT_UPDATE_DIALOGUE_HEADER_USER_STATUS = 'EventUpdateDialogueHeaderUserStatus',

  EVENT_OPEN_DIALOGUE_BOX = 'EventOpenDialogueBox',
  EVENT_SHOW_WRITE_FIRST_MESSAGE_NOTIFICATION = 'EventShowWriteFirstMessageNotification',

  EVENT_SHOW_NEW_MESSAGES_LINE = 'EventShowNewMessagesLine',
  EVENT_DELETE_NEW_MESSAGES_LINE = 'EventDeleteNewMessagesLine',

  EVENT_ADD_MESSAGE = 'EventAddMessage',
  EVENT_ADD_RECEIVED_MESSAGE = 'EventAddReceivedMessage',
  EVENT_DELETE_MESSAGE = 'EventDeleteMessage',

  EVENT_CHANGE_MESSAGE_READ_STATUS = 'EventChangeMessageReadStatus',

  EVENT_SHOW_MESSAGE_RECEIVED_NOTIFICATION = 'EventShowMessageReceivedNotification',
  EVENT_DELETE_MESSAGE_RECEIVED_NOTIFICATION = 'EventDeleteMessageReceivedNotification',
}
