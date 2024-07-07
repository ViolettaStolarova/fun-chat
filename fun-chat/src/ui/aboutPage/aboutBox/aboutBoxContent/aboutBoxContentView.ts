import CreateElement from '../../../../utilities/createElement';
import CreateLinkElement from '../../../../utilities/createLinkElement';
import { ABOUT_BOX_TEXT_CONTENT } from '../../../../constants/aboutPageConstants';
import {
  APP_NAME,
  GITHUB_LINK,
  GITHUB_LOGO_STRING_SVG_ELEMENT,
} from '../../../../constants/pagesConstants';
import ReturnButtonController from '../../../../controller/buttonControllers/returnButtonController/returnButtonController';

class AboutBoxContentView {
  private returnButtonController: ReturnButtonController = new ReturnButtonController();

  public render(): HTMLElement {
    const aboutBoxContent = this.createAboutBoxContent();

    this.returnButtonController.addReturnButtonEventListener(aboutBoxContent);

    return aboutBoxContent;
  }

  private createAboutBoxContent(): HTMLElement {
    const aboutBoxContent = new CreateElement('div', {
      className: 'about-box-content',
    }).createElement();

    const title = this.createTitle();
    const textContent = this.createTextContent();
    const githubLink = this.createGithubLink();
    const returnButton = this.createReturnButton();

    aboutBoxContent.append(title, textContent, githubLink, returnButton);

    return aboutBoxContent;
  }

  private createTitle(): HTMLElement {
    const title = new CreateElement(
      'p',
      { className: 'about-box-title' },
      APP_NAME
    ).createElement();

    return title;
  }

  private createTextContent(): HTMLElement {
    const textContent = new CreateElement(
      'p',
      { className: 'about-box-text' },
      ABOUT_BOX_TEXT_CONTENT
    ).createElement();

    return textContent;
  }

  private createGithubLink(): HTMLElement {
    const githubLink = new CreateLinkElement({
      href: GITHUB_LINK,
      target: '_blank',
      className: 'github-link',
      innerHTML: GITHUB_LOGO_STRING_SVG_ELEMENT,
    }).createElement();

    return githubLink;
  }

  private createReturnButton(): HTMLElement {
    const returnButton = new CreateElement(
      'button',
      { className: 'return-btn' },
      'Return'
    ).createElement();

    return returnButton;
  }
}

export default AboutBoxContentView;
