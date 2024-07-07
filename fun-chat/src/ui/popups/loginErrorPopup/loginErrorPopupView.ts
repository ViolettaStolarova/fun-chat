import { CLOSE_ICON_STRING_SVG_ELEMENT } from '../../../constants/pagesConstants';
import CreateElement from '../../../utilities/createElement';

import './loginErrorPopup.css';

class LoginErrorPopup {
  private popup: HTMLElement | null = null;

  public initialize(): void {
    this.popup = this.createPopupContainer();

    document.body.append(this.popup);
  }

  private createPopupContainer(): HTMLElement {
    const popupContainer = new CreateElement('div', {
      className: 'login-error-popup-container',
    }).createElement();

    const popup = new CreateElement('div', { className: 'login-error-popup' }).createElement();

    const errorMessage = new CreateElement('div', {
      className: 'login-error-message',
    }).createElement();

    const closeButton = new CreateElement(
      'div',
      {
        className: 'close-btn',
      },
      CLOSE_ICON_STRING_SVG_ELEMENT
    ).createElement();

    closeButton.addEventListener('click', () => {
      this.close();
    });

    popup.append(closeButton, errorMessage);

    popupContainer.append(popup);

    return popupContainer;
  }

  private setErrorMessage(message: string): void {
    const errorMessage = this.popup?.querySelector('.login-error-message') as HTMLElement;

    errorMessage.innerHTML = message;
  }

  public open(message: string): void {
    if (this.popup) {
      this.setErrorMessage(message);

      this.popup.style.display = 'flex';
    }
  }

  public close(): void {
    if (this.popup) {
      this.popup.style.display = 'none';
    }
  }
}

export default LoginErrorPopup;
