import { IUserItemController } from './userItemController.interface';
import { UserFromServer } from '../../api/api.interfaces';
import { Server } from '../../api/api.singleton';
import { EventBusEvents } from '../../eventBus/eventBus.interface';
import EventBus from '../../eventBus/eventBus.singleton';

class UserItemController implements IUserItemController {
  public addUserItemEventListener(userItem: HTMLElement, user: UserFromServer): void {
    userItem.addEventListener('click', async () => {
      await Server.getMessageHistory(user.login);

      EventBus.dispatch(EventBusEvents.EVENT_UPDATE_DIALOGUE_HEADER, user);
    });
  }
}

export default UserItemController;
