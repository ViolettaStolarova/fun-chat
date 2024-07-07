import HeaderView from './header/headerContentView';
import FooterView from './footer/footerContentView';
import CreateElement from '../../../utilities/createElement';
import MainContentView from './main/mainContentView';

class ChatBoxView {
  private headerView: HeaderView;

  private mainView: MainContentView;

  private footerView: FooterView;

  constructor() {
    this.headerView = new HeaderView();
    this.mainView = new MainContentView();
    this.footerView = new FooterView();
  }

  public render(): HTMLElement {
    const chatBox = this.createChatBox();

    return chatBox;
  }

  private createChatBox(): HTMLElement {
    const chatBox = new CreateElement('div', {
      className: 'chat-box',
    }).createElement();

    const header = this.headerView.render();
    const main = this.mainView.render();
    const footer = this.footerView.render();

    chatBox.append(header, main, footer);

    return chatBox;
  }
}

export default ChatBoxView;
