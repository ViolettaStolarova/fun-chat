import { IChatPageView } from './chatPage.interface';
import CreateElement from '../../utilities/createElement';
import ChatBoxView from './chatBox/chatBoxView';

import './chatPage.css';

class ChatPageView implements IChatPageView {
  private container: HTMLElement;

  private chatBoxView: ChatBoxView;

  constructor(containerId: string) {
    this.container = new CreateElement('div', { id: containerId }).createElement();

    this.chatBoxView = new ChatBoxView();
  }

  public render(): HTMLElement {
    const chatBox = this.chatBoxView.render();

    this.container.append(chatBox);

    return this.container;
  }
}

export default ChatPageView;
