import { Server } from '../../api/api.singleton';
import { EventBusEvents } from '../../eventBus/eventBus.interface';
import EventBus from '../../eventBus/eventBus.singleton';
import { IChatController } from './chatController.interface';

class ChatController implements IChatController {
  public addChatEventListener(container: HTMLElement): void {
    const dialogueBox = container.querySelector('.dialogue-box') as HTMLElement;

    const handleMessages = async () => {
      const messages = dialogueBox.querySelectorAll('.message');
      const messagesIds: string[] = [];

      const userItemName = container.querySelector('.user-name')?.textContent as string;

      if (userItemName) {
        EventBus.dispatch(EventBusEvents.EVENT_DELETE_MESSAGE_RECEIVED_NOTIFICATION, userItemName);
      }

      if (messages.length === 0) {
        return;
      }

      messages.forEach((message) => {
        const messageId = message.getAttribute('id');
        if (messageId) {
          messagesIds.push(messageId);
        }
      });

      await Promise.all(
        messagesIds.map(async (messageId: string) => {
          await Server.setMessageReadStatus(messageId);
        })
      );
    };

    dialogueBox.addEventListener('click', handleMessages);
  }
}

export default ChatController;
