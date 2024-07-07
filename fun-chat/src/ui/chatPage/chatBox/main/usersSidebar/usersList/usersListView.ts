import CreateElement from '../../../../../../utilities/createElement';

class UsersListView {
  public render(): HTMLElement {
    const usersListContainer = this.createUsersContainer();

    return usersListContainer;
  }

  private createUsersContainer(): HTMLElement {
    const usersContainer = new CreateElement('div', {
      className: 'users-container',
    }).createElement();

    return usersContainer;
  }
}

export default UsersListView;
