import CreateElement from '../../../utilities/createElement';
import AboutBoxContentView from './aboutBoxContent/aboutBoxContentView';

class AboutBoxView {
  private aboutBoxContentView: AboutBoxContentView;

  constructor() {
    this.aboutBoxContentView = new AboutBoxContentView();
  }

  public render(): HTMLElement {
    const aboutBox = this.createAboutBox();

    return aboutBox;
  }

  private createAboutBox(): HTMLElement {
    const aboutBox = new CreateElement('div', { className: 'about-box' }).createElement();

    const aboutBoxContent = this.aboutBoxContentView.render();

    aboutBox.append(aboutBoxContent);

    return aboutBox;
  }
}

export default AboutBoxView;
