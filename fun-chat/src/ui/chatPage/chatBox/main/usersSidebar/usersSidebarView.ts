import CreateElement from '../../../../../utilities/createElement';
import SearchFormView from './searchForm/searchFormView';
import UsersListView from './usersList/usersListView';

class UsersSidebarView {
  private searchFormView: SearchFormView;

  private usersListView: UsersListView;

  constructor() {
    this.searchFormView = new SearchFormView();
    this.usersListView = new UsersListView();
  }

  public render(): HTMLElement {
    const usersSidebar = this.createUsersSidebar();

    return usersSidebar;
  }

  private createUsersSidebar(): HTMLElement {
    const usersSidebar = new CreateElement('div', { className: 'users-sidebar' }).createElement();

    const searchForm = this.searchFormView.render();
    const usersList = this.usersListView.render();

    usersSidebar.append(searchForm, usersList);

    return usersSidebar;
  }
}

export default UsersSidebarView;
