import { IAboutPageView } from './aboutPage.interface';
import CreateElement from '../../utilities/createElement';
import AboutBoxView from './aboutBox/aboutBoxView';

import './aboutPage.css';

class AboutPageView implements IAboutPageView {
  private container: HTMLElement;

  private aboutBoxView: AboutBoxView;

  constructor(containerId: string) {
    this.container = new CreateElement('div', { id: containerId }).createElement();

    this.aboutBoxView = new AboutBoxView();
  }

  public render(): HTMLElement {
    const aboutBox = this.aboutBoxView.render();

    this.container.append(aboutBox);

    return this.container;
  }
}

export default AboutPageView;
