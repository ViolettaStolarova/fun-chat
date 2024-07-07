import { UserMessageFromServer } from '../../../../../../../api/api.interfaces';
import {
  DELETE_ICON,
  MessageStatusesIcons,
} from '../../../../../../../constants/chatPageConstants';
import DeleteMessageButtonController from '../../../../../../../controller/buttonControllers/deleteMessageButtonController/deleteMessageButtonController';
import CreateElement from '../../../../../../../utilities/createElement';

class MessageItemView {
  private deleteMessageButtonController: DeleteMessageButtonController =
    new DeleteMessageButtonController();

  constructor(message: UserMessageFromServer, cameFrom: string) {
    const dialogueBox = document.querySelector('.dialogue-box') as HTMLElement;
    const messageItem = this.createMessageItem(message, cameFrom);

    if (dialogueBox) {
      dialogueBox.append(messageItem);
    }

    this.scrollDialogueBoxToLastMessage(dialogueBox);
  }

  private scrollDialogueBoxToLastMessage(container: HTMLElement) {
    container.scrollTop = container.scrollHeight;
  }

  private createMessageItem(message: UserMessageFromServer, cameFrom: string): HTMLElement {
    const messageItem = new CreateElement('div', {
      className: `message ${cameFrom}`,
      id: message.id,
    }).createElement();

    const from = this.createFromElement(cameFrom, message);
    const dateTime = this.createDateTimeElement(message);
    const messageText = this.createMessageTextElement(message);
    const messageEditedStatus = this.createMessageEditedStatusElement(message);
    const messageDeliveredStatus = this.createMessageDeliveredStatusElement(message);
    const deleteMessageButton = this.createDeleteMessageButtonElement(message);

    if (cameFrom === 'current-user') {
      messageItem.append(
        from,
        dateTime,
        messageText,
        messageEditedStatus,
        messageDeliveredStatus,
        deleteMessageButton
      );
    } else {
      messageItem.append(from, dateTime, messageText, messageEditedStatus);
    }

    return messageItem;
  }

  private createFromElement(cameFrom: string, message: UserMessageFromServer): HTMLElement {
    const from = new CreateElement(
      'p',
      { className: 'message-from' },
      `${cameFrom === 'current-user' ? 'You' : message.from}`
    ).createElement();

    return from;
  }

  private createDateTimeElement(message: UserMessageFromServer): HTMLElement {
    const formattedDateTime = this.formatDateTime(message.datetime);
    const dateTime = new CreateElement(
      'p',
      { className: 'message-dateTime' },
      `${formattedDateTime}`
    ).createElement();

    return dateTime;
  }

  private createMessageTextElement(message: UserMessageFromServer): HTMLElement {
    const messageText = new CreateElement(
      'p',
      {
        className: 'message-text',
      },
      message.text
    ).createElement();

    return messageText;
  }

  private createMessageEditedStatusElement(message: UserMessageFromServer): HTMLElement {
    const messageEditedStatus = new CreateElement(
      'p',
      {
        className: 'message-edited-status',
      },
      message.status.isEdited ? 'edited' : ''
    ).createElement();

    return messageEditedStatus;
  }

  private createMessageDeliveredStatusElement(message: UserMessageFromServer): HTMLElement {
    let deliveredStatusIcon = '';
    if (message.status.isReaded) {
      deliveredStatusIcon = MessageStatusesIcons.READED;
    } else if (message.status.isDelivered) {
      deliveredStatusIcon = MessageStatusesIcons.DELIVERED;
    } else {
      deliveredStatusIcon = MessageStatusesIcons.SENT;
    }

    const messageDeliveredStatus = new CreateElement(
      'p',
      {
        className: 'message-delivered-status',
      },
      deliveredStatusIcon
    ).createElement();

    return messageDeliveredStatus;
  }

  private createDeleteMessageButtonElement(message: UserMessageFromServer): HTMLElement {
    const deleteMessageButton = new CreateElement(
      'button',
      { className: 'delete-btn', id: `deleteBtn-${message.id}` },
      DELETE_ICON
    ).createElement();
    this.deleteMessageButtonController.addDeleteMessageButtonEventListener(deleteMessageButton);

    return deleteMessageButton;
  }

  private formatDateTime(datetime: number): string {
    const date = new Date(datetime);

    const formattedDateTime = `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}, ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

    return formattedDateTime;
  }
}

export default MessageItemView;
