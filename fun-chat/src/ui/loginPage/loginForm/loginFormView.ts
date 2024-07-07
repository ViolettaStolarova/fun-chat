import {
  ABOUT_ICON_STRING_SVG_ELEMENT,
  USER_ICON_STRING_SVG_ELEMENT,
} from '../../../constants/pagesConstants';
import AboutIconController from '../../../controller/aboutIconController/aboutIconController';
import LoginFormController from '../../../controller/inputControllers/loginFormController/loginFormController';
import CreateElement from '../../../utilities/createElement';
import CreateInputElement from '../../../utilities/createInputElement';

class LoginFormView {
  private loginFormController: LoginFormController = new LoginFormController();

  private aboutIconController: AboutIconController = new AboutIconController();

  public render(): HTMLElement {
    const loginFormContainer = this.createLoginFormContainer();

    this.loginFormController.addLoginFormEventListeners(loginFormContainer);
    this.aboutIconController.addLoginAboutIconEventListener(loginFormContainer);

    return loginFormContainer;
  }

  private createLoginFormContainer(): HTMLElement {
    const loginFormContainer = new CreateElement('div', {
      className: 'login-form-container',
    }).createElement();

    const loginForm = this.createLoginForm();

    loginFormContainer.append(loginForm);

    return loginFormContainer;
  }

  private createLoginForm(): HTMLFormElement {
    const loginForm = new CreateElement('form', {
      className: 'login-form',
    }).createElement() as HTMLFormElement;

    const userIcon = new CreateElement(
      'div',
      { className: 'user-icon' },
      USER_ICON_STRING_SVG_ELEMENT
    ).createElement();

    const aboutIcon = new CreateElement(
      'div',
      { className: 'about-icon' },
      ABOUT_ICON_STRING_SVG_ELEMENT
    ).createElement();

    const formLabelUserName = this.createFormLabel(
      'Username:',
      'userLogin',
      'Enter username',
      'text'
    );

    const formLabelUserPassword = this.createFormLabel(
      'Password:',
      'userPassword',
      'Enter password',
      'password'
    );

    const loginButton = this.createLoginButton();

    loginForm.append(userIcon, aboutIcon);
    loginForm.append(formLabelUserName, formLabelUserPassword, loginButton);

    return loginForm;
  }

  private createFormLabel(
    labelText: string,
    inputName: string,
    inputPlaceholder: string,
    inputType: string
  ): HTMLElement {
    const label = new CreateElement(
      'label',
      { className: `label-${inputName}` },
      labelText
    ).createElement();

    const input = new CreateInputElement({
      placeholder: inputPlaceholder,
      type: inputType,
      required: true,
      className: `input-${inputName}`,
    }).createElement();
    input.maxLength = 10;

    const errorMessage = new CreateElement(
      'p',
      { className: `error-message-${inputName}` },
      ' '
    ).createElement();

    label.append(errorMessage, input);

    return label;
  }

  private createLoginButton(): HTMLButtonElement {
    const loginButton = new CreateElement(
      'button',
      { className: 'login-btn' },
      'Login'
    ).createElement() as HTMLButtonElement;
    loginButton.disabled = true;

    return loginButton;
  }
}

export default LoginFormView;
