import CreateElement from '../../../../utilities/createElement';
import CreateLinkElement from '../../../../utilities/createLinkElement';
import {
  GITHUB_LINK,
  SCHOOL_LINK,
  GITHUB_LOGO_STRING_SVG_ELEMENT,
  SCHOOL_LOGO_STRING_SVG_ELEMENT,
} from '../../../../constants/pagesConstants';

import './footer.css';

class FooterContentView {
  public render(): HTMLElement {
    const footerContent = this.createFooterContent();

    return footerContent;
  }

  private createFooterContent() {
    const footerContent = new CreateElement('footer', {
      className: 'footer-content',
    }).createElement();

    const schoolLogo = this.createSchoolLogoAndLink();
    const yearOfAppCreation = this.createYearOfAppCreation();
    const githubLogo = this.createGithubLogoAndLink();

    footerContent.append(schoolLogo, yearOfAppCreation, githubLogo);

    return footerContent;
  }

  private createSchoolLogoAndLink(): HTMLElement {
    const schoolLogo = new CreateElement('div', { className: 'school-logo' }).createElement();

    const schoolLink = new CreateLinkElement({
      href: SCHOOL_LINK,
      target: '_blank',
      className: 'school-link',
      innerHTML: SCHOOL_LOGO_STRING_SVG_ELEMENT,
    }).createElement();

    schoolLogo.append(schoolLink);

    return schoolLogo;
  }

  private createGithubLogoAndLink(): HTMLElement {
    const githubLogo = new CreateElement('div', { className: 'github-logo' }).createElement();

    const githubLink = new CreateLinkElement({
      href: GITHUB_LINK,
      target: '_blank',
      className: 'github-link',
      innerHTML: GITHUB_LOGO_STRING_SVG_ELEMENT,
    }).createElement();

    githubLogo.append(githubLink);

    return githubLogo;
  }

  private createYearOfAppCreation(): HTMLElement {
    const yearOfAppCreation = new CreateElement(
      'div',
      {
        className: 'creation-year',
      },
      '2024'
    ).createElement();

    return yearOfAppCreation;
  }
}
export default FooterContentView;
