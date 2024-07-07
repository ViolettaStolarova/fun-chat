import { Server } from '../../../api/api.singleton';
import { IDeleteMessageButtonController } from './deleteMessageButtonController.interface';

class DeleteMessageButtonController implements IDeleteMessageButtonController {
  public addDeleteMessageButtonEventListener(button: HTMLElement): void {
    button.addEventListener('click', async () => {
      const deleteButtonId = button.id;
      const messageId = deleteButtonId.substring(deleteButtonId.indexOf('-') + 1);

      await Server.deleteMessage(messageId);
    });
  }
}

export default DeleteMessageButtonController;
