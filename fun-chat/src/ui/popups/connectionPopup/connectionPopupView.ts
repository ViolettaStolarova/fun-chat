import CreateElement from '../../../utilities/createElement';

import './connectionPopup.css';

class ConnectionPopup {
  private popup: HTMLElement | null = null;

  public initialize(): void {
    this.popup = this.createPopupContainer();

    document.body.append(this.popup);
  }

  private createPopupContainer(): HTMLElement {
    const popupContainer = new CreateElement('div', {
      className: 'connection-popup-container',
    }).createElement();

    const popup = new CreateElement('div', { className: 'connection-popup' }).createElement();

    const loaderWrapper = new CreateElement('div', { className: 'loader-wrapper' }).createElement();
    const loader = new CreateElement('div', {
      className: 'loader',
    }).createElement() as HTMLImageElement;

    const connectionMessage = new CreateElement(
      'div',
      {
        className: 'connection-message',
      },
      'Connection...'
    ).createElement();

    loaderWrapper.append(loader);

    popup.append(loaderWrapper, connectionMessage);

    popupContainer.append(popup);

    return popupContainer;
  }

  public open(): void {
    if (this.popup) {
      this.popup.style.display = 'flex';
    }
  }

  public close(): void {
    if (this.popup) {
      this.popup.style.display = 'none';
    }
  }
}

export default ConnectionPopup;
