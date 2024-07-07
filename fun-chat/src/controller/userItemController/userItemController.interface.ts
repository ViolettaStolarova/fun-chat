import { UserFromServer } from '../../api/api.interfaces';

export interface IUserItemController {
  addUserItemEventListener(userItem: HTMLElement, user: UserFromServer): void;
}
