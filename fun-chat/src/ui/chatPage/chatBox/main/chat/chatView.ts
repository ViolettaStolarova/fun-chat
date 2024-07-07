import { DialogueNotifications } from '../../../../../constants/chatPageConstants';
import ChatController from '../../../../../controller/chatController/chatController';
import CreateElement from '../../../../../utilities/createElement';
import SendMessageFormView from './sendMessageForm/sendMessageFormView';

class ChatView {
  sendForm: SendMessageFormView = new SendMessageFormView();

  chatController: ChatController = new ChatController();

  public render() {
    const chat = this.createChat();

    this.chatController.addChatEventListener(chat);

    return chat;
  }

  private createChat() {
    const chat = new CreateElement('div', { className: 'chat' }).createElement();

    const dialogueHeader = this.createDialogueHeader();

    const dialogueBox = new CreateElement('div', { className: 'dialogue-box' }).createElement();

    const notification = new CreateElement(
      'div',
      {
        className: 'dialogue-box-notification',
      },
      DialogueNotifications.SELECT_USER_NOTIFICATION
    ).createElement();

    const sendForm = this.sendForm.render();

    dialogueBox.append(notification);
    chat.append(dialogueHeader, dialogueBox, sendForm);

    return chat;
  }

  private createDialogueHeader() {
    const dialogueBoxHeader = new CreateElement('div', {
      className: 'dialogue-box-header',
    }).createElement();

    const userName = new CreateElement('div', {
      className: 'user-name',
    }).createElement();

    const userStatus = new CreateElement('div', {
      className: 'user-status',
    }).createElement();

    dialogueBoxHeader.append(userName, userStatus);

    return dialogueBoxHeader;
  }

  static createWriteFirstMessageNotification(): void {
    const dialogueBox = document.querySelector('.dialogue-box') as HTMLElement;

    const notification = new CreateElement(
      'div',
      {
        className: 'dialogue-box-notification',
      },
      DialogueNotifications.WRITE_FIRST_MESSAGE_NOTIFICATION
    ).createElement();

    dialogueBox.append(notification);
  }
}

export default ChatView;
