import { UserFromServer } from '../../../../../../../api/api.interfaces';
import UserItemController from '../../../../../../../controller/userItemController/userItemController';
import CreateElement from '../../../../../../../utilities/createElement';

class UsersListItemView {
  private userItemController: UserItemController = new UserItemController();

  constructor(user: UserFromServer) {
    const userItem = this.createUserItem(user.login, user.isLogined);

    const usersContainer = document.querySelector('.users-container') as HTMLElement;

    if (usersContainer) {
      if (user.isLogined) {
        usersContainer.prepend(userItem);
      } else {
        usersContainer.append(userItem);
      }

      this.userItemController.addUserItemEventListener(userItem, user);
    }
  }

  private createUserItem(login: string, status: boolean): HTMLElement {
    const userItem = new CreateElement('div', {
      className: `user-item user-item-${login}`,
    }).createElement();

    const userName = this.createUserItemName(login);
    const notification = this.createUserNotification(login);
    const userStatus = this.createUserStatus(status);

    userItem.append(userName, notification, userStatus);

    return userItem;
  }

  private createUserItemName(name: string): HTMLElement {
    const userName = new CreateElement(
      'div',
      { className: 'user-item-name' },
      name
    ).createElement();

    return userName;
  }

  private createUserStatus(status: boolean): HTMLElement {
    const userStatus = new CreateElement('div', {
      className: `user-item-status ${status}`,
    }).createElement();

    return userStatus;
  }

  private createUserNotification(userName: string): HTMLElement {
    const notification = new CreateElement('div', {
      className: `notification notification-${userName}`,
    }).createElement();

    return notification;
  }
}

export default UsersListItemView;
