import { ILoginFormController } from './loginFormController.interface';
import User from '../../../api/api.interfaces';
import { Server } from '../../../api/api.singleton';
import {
  ERROR_ICON,
  InputErrorMessages,
  ValidInputLength,
  ValidationPatterns,
} from '../../../constants/loginPageConstants';
import { PageIDs } from '../../../constants/pagesConstants';
import SessionStorage from '../../../sessionStorage/sessionStorage.singleton';

class LoginFormController implements ILoginFormController {
  public addLoginFormEventListeners(formContainer: HTMLElement): void {
    const loginForm = formContainer.querySelector('.login-form') as HTMLFormElement;

    if (loginForm) {
      loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        this.submitForm(loginForm);
      });

      window.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || document.body.id === PageIDs.LOGIN_PAGE) {
          this.submitForm(loginForm);
        }
      });

      loginForm.addEventListener('input', () => {
        this.validateFormInputsAndGetStatus(loginForm);
      });
    }
  }

  private async submitForm(form: HTMLFormElement): Promise<void> {
    if (this.validateFormInputsAndGetStatus(form)) {
      const user: User = {
        login: this.getLoginInputValue(form),
        password: this.getPasswordInputValue(form),
      };

      const storeUser = SessionStorage.getUser();
      if (user.login !== storeUser?.login) {
        SessionStorage.setUser(user);
      }

      await Server.loginUser(user);

      this.clearFormInputs(form);
      this.disableLoginButton(form);
    }
  }

  private getLoginInputValue(form: HTMLFormElement): string {
    const userLoginInput = form.querySelector('.input-userLogin') as HTMLInputElement;
    const inputValue = userLoginInput.value;

    return inputValue;
  }

  private getPasswordInputValue(form: HTMLFormElement): string {
    const userPasswordInput = form.querySelector('.input-userPassword') as HTMLInputElement;
    const inputValue = userPasswordInput.value;

    return inputValue;
  }

  private clearFormInputs(form: HTMLFormElement): void {
    const inputs = form.querySelectorAll('input');
    inputs.forEach((input) => {
      input.value = '';
    });
  }

  private disableLoginButton(form: HTMLFormElement): void {
    const loginButton = form.querySelector('.login-btn') as HTMLButtonElement;

    loginButton.disabled = true;
  }

  private validateFormInputsAndGetStatus(form: HTMLFormElement): boolean {
    const userLoginInput = form.querySelector('.input-userLogin') as HTMLInputElement;
    const userPasswordInput = form.querySelector('.input-userPassword') as HTMLInputElement;
    const userLoginError = form.querySelector('.error-message-userLogin') as HTMLElement;
    const userPasswordError = form.querySelector('.error-message-userPassword') as HTMLElement;

    this.clearErrorMessages(userLoginError, userPasswordError);

    const isUserNameValid = this.validateInput(
      userLoginInput,
      userLoginError,
      ValidationPatterns.englishLettersAndDigitsOnly,
      ValidationPatterns.firstLetterIsUppercase,
      ValidInputLength.USER_LOGIN_MIN_LENGTH
    );

    const isUserSurnameValid = this.validateInput(
      userPasswordInput,
      userPasswordError,
      ValidationPatterns.englishLettersAndDigitsOnly,
      ValidationPatterns.firstLetterIsUppercase,
      ValidInputLength.USER_PASSWORD_MIN_LENGTH
    );

    const loginButton = form.querySelector('.login-btn') as HTMLButtonElement;
    if (loginButton) {
      loginButton.disabled = !(isUserNameValid && isUserSurnameValid);
    }

    return isUserNameValid && isUserSurnameValid;
  }

  private clearErrorMessages(...messages: HTMLElement[]): void {
    messages.forEach((message) => {
      message.textContent = '';
    });
  }

  private validateInput(
    input: HTMLInputElement,
    errorElement: HTMLElement,
    lettersPattern: RegExp,
    firstLetterPattern: RegExp,
    minLength: number
  ): boolean {
    let isValid = true;

    if (!this.validatePattern(input.value, lettersPattern)) {
      errorElement.textContent = `${ERROR_ICON} ${InputErrorMessages.ENGLISH_LETTERS_AND_DIGITS}`;
      isValid = false;
    } else if (!this.validatePattern(input.value[0], firstLetterPattern)) {
      errorElement.textContent = `${ERROR_ICON} ${InputErrorMessages.FIRST_LETTER_UPPERCASE}`;
      isValid = false;
    } else if (input.value.length < minLength) {
      errorElement.textContent = `${ERROR_ICON} ${InputErrorMessages.MIN_LENGTH} ${minLength} `;
      isValid = false;
    }

    return isValid;
  }

  private validatePattern(value: string, pattern: RegExp): boolean {
    return pattern.test(value);
  }
}

export default LoginFormController;
