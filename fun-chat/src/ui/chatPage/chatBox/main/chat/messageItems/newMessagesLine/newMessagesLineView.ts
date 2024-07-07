import { UserMessageFromServer } from '../../../../../../../api/api.interfaces';
import CreateElement from '../../../../../../../utilities/createElement';

class NewMessagesLine {
  constructor(firstUnreadMessage: UserMessageFromServer) {
    const dialogueBox = document.querySelector('.dialogue-box') as HTMLElement;

    const unreadMessage = dialogueBox.querySelector(
      `[id="${firstUnreadMessage.id}"]`
    ) as HTMLElement;

    if (!unreadMessage) {
      return;
    }

    const newMessagesLine = this.createNewMessagesLine();

    if (dialogueBox) {
      dialogueBox.insertBefore(newMessagesLine, unreadMessage);
    }

    this.scrollDialogueBoxToLine(dialogueBox, newMessagesLine);
  }

  private scrollDialogueBoxToLine(container: HTMLElement, line: HTMLElement) {
    const linePosition = line.offsetTop;

    container.scrollTop = linePosition;
  }

  private createNewMessagesLine(): HTMLElement {
    const newMessagesLine = new CreateElement(
      'div',
      {
        className: 'new-messages-line',
      },
      'new'
    ).createElement();

    return newMessagesLine;
  }
}

export default NewMessagesLine;
