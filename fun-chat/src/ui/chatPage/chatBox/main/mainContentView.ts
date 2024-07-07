import CreateElement from '../../../../utilities/createElement';
import UsersSidebarView from './usersSidebar/usersSidebarView';
import ChatView from './chat/chatView';

import './chat.css';

class MainContentView {
  private usersSidebarView: UsersSidebarView;

  private chatView: ChatView;

  constructor() {
    this.usersSidebarView = new UsersSidebarView();
    this.chatView = new ChatView();
  }

  public render(): HTMLElement {
    const mainContent = this.createMainContent();

    return mainContent;
  }

  private createMainContent(): HTMLElement {
    const mainContent = new CreateElement('main', {
      className: 'main-content',
    }).createElement();

    const usersSidebar = this.usersSidebarView.render();
    const chat = this.chatView.render();

    mainContent.append(usersSidebar, chat);

    return mainContent;
  }
}

export default MainContentView;
