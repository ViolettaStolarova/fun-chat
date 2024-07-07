import { ISendFormController } from './sendFormController.interface';
import { UserMessage } from '../../../api/api.interfaces';
import { Server } from '../../../api/api.singleton';
import { PageIDs } from '../../../constants/pagesConstants';

class SendFormController implements ISendFormController {
  public addSendFormEventListeners(formContainer: HTMLElement): void {
    const sendForm = formContainer.querySelector('.send-form') as HTMLFormElement;
    const sendInput = formContainer.querySelector('.input-send') as HTMLInputElement;
    const sendButton = formContainer.querySelector('.send-btn') as HTMLButtonElement;

    if (sendForm) {
      sendForm.addEventListener('submit', (event) => {
        event.preventDefault();

        this.submitForm(sendForm);

        this.toggleSendButton(sendInput, sendButton);
      });

      sendButton.addEventListener('click', (event) => {
        event.preventDefault();

        this.submitForm(sendForm);

        this.toggleSendButton(sendInput, sendButton);
      });

      window.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || document.body.id === PageIDs.CHAT_PAGE) {
          this.submitForm(sendForm);

          this.toggleSendButton(sendInput, sendButton);
        }
      });

      sendInput.addEventListener('input', () => {
        this.toggleSendButton(sendInput, sendButton);
      });
    }
  }

  private toggleSendButton(input: HTMLInputElement, button: HTMLButtonElement): void {
    if (input.value.trim() === '') {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  }

  private async submitForm(form: HTMLFormElement): Promise<void> {
    const messageText = this.getMessageInput(form);

    if (!messageText) {
      return;
    }

    const message: UserMessage = {
      to: this.getRecipient(),
      text: messageText,
    };

    this.clearMessageInput(form);

    await Server.sendMessageToUser(message);
  }

  private getMessageInput(form: HTMLElement): string {
    const sendInput = form.querySelector('.input-send') as HTMLInputElement;
    return sendInput.value;
  }

  private clearMessageInput(form: HTMLElement): void {
    const input = form.querySelector('.input-send') as HTMLInputElement;
    input.value = '';
  }

  private getRecipient(): string {
    const userToSendMessage = document.querySelector('.user-name') as HTMLElement;

    return userToSendMessage.textContent!;
  }
}

export default SendFormController;
