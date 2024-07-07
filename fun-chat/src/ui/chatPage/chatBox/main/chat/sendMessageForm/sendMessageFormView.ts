import { SEND_ICON_STRING_SVG_ELEMENT } from '../../../../../../constants/chatPageConstants';
import SendFormController from '../../../../../../controller/inputControllers/sendFormController/sendFormController';
import CreateElement from '../../../../../../utilities/createElement';
import CreateInputElement from '../../../../../../utilities/createInputElement';

class SendMessageFormView {
  sendFormController: SendFormController = new SendFormController();

  public render(): HTMLElement {
    const sendMessageFormContainer = this.createSendMessageFormContainer();

    this.sendFormController.addSendFormEventListeners(sendMessageFormContainer);

    return sendMessageFormContainer;
  }

  private createSendMessageFormContainer(): HTMLElement {
    const sendMessageFormContainer = new CreateElement('div', {
      className: 'send-form-container',
    }).createElement();

    const sendMessageForm = this.createSendMessageForm();

    sendMessageFormContainer.append(sendMessageForm);

    return sendMessageFormContainer;
  }

  private createSendMessageForm(): HTMLElement {
    const sendMessageForm = new CreateElement('form', {
      className: 'send-form',
    }).createElement() as HTMLFormElement;

    const formSendMessageInput = new CreateInputElement({
      placeholder: 'Message...',
      className: `input-send`,
    }).createElement();
    formSendMessageInput.disabled = true;

    const sendButton = new CreateElement(
      'button',
      { className: 'send-btn' },
      SEND_ICON_STRING_SVG_ELEMENT
    ).createElement() as HTMLButtonElement;
    sendButton.disabled = true;

    sendMessageForm.append(formSendMessageInput, sendButton);

    return sendMessageForm;
  }
}

export default SendMessageFormView;
