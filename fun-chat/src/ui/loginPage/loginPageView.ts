import { ILoginPageView } from './loginPage.interface';
import CreateElement from '../../utilities/createElement';
import LoginFormView from './loginForm/loginFormView';

import './loginPage.css';

class LoginPageView implements ILoginPageView {
  private container: HTMLElement;

  private loginFormView: LoginFormView;

  constructor(containerId: string) {
    this.container = new CreateElement('div', { id: containerId }).createElement();

    this.loginFormView = new LoginFormView();
  }

  public render(): HTMLElement {
    const loginFormContainer = this.loginFormView.render();

    this.container.append(loginFormContainer);

    return this.container;
  }
}

export default LoginPageView;
