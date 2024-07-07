import CreateElement from '../../../../utilities/createElement';
import LogoutButtonController from '../../../../controller/buttonControllers/logoutButtonController/logoutButtonController';
import AboutIconController from '../../../../controller/aboutIconController/aboutIconController';
import {
  ABOUT_ICON_STRING_SVG_ELEMENT,
  USER_ICON_STRING_SVG_ELEMENT,
  APP_NAME,
} from '../../../../constants/pagesConstants';

import './header.css';

class HeaderContentView {
  private logoutButtonController: LogoutButtonController = new LogoutButtonController();

  private AboutIconController: AboutIconController = new AboutIconController();

  public render(): HTMLElement {
    const headerContent = this.createHeaderContent();

    this.logoutButtonController.addLogoutButtonEventListener(headerContent);
    this.AboutIconController.addChatAboutIconEventListener(headerContent);

    return headerContent;
  }

  private createHeaderContent(): HTMLElement {
    const headerContent = new CreateElement('header', {
      className: 'header-content',
    }).createElement();

    const currentUser = this.createCurrentUserDisplay();
    const createAppName = this.createAppName();
    const aboutIcon = this.createAboutIcon();
    const logoutButton = this.createLogoutButton();

    headerContent.append(currentUser, aboutIcon, createAppName, logoutButton);

    return headerContent;
  }

  private createCurrentUserDisplay(): HTMLElement {
    const currentUserDisplay = new CreateElement('div', {
      className: 'current-user',
    }).createElement();

    const currentUserIcon = new CreateElement(
      'div',
      {
        className: 'user-icon',
      },
      USER_ICON_STRING_SVG_ELEMENT
    ).createElement();

    const currentUserName = new CreateElement('div', {
      className: 'current-userName',
    }).createElement();

    currentUserDisplay.append(currentUserIcon, currentUserName);

    return currentUserDisplay;
  }

  private createAppName(): HTMLElement {
    const appName = new CreateElement('p', { className: 'app-name' }, APP_NAME).createElement();

    return appName;
  }

  private createAboutIcon(): HTMLElement {
    const aboutIcon = new CreateElement(
      'div',
      { className: 'chat-about-icon' },
      ABOUT_ICON_STRING_SVG_ELEMENT
    ).createElement();

    return aboutIcon;
  }

  private createLogoutButton(): HTMLElement {
    const logoutButton = new CreateElement(
      'button',
      { className: 'logout-btn' },
      'Logout'
    ).createElement();

    return logoutButton;
  }
}

export default HeaderContentView;
