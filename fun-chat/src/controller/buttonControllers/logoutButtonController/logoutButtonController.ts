import { ILogoutButtonController } from './logoutButtonController.interface';
import { Server } from '../../../api/api.singleton';
import User from '../../../api/api.interfaces';
import SessionStorage from '../../../sessionStorage/sessionStorage.singleton';

class LogoutButtonController implements ILogoutButtonController {
  public addLogoutButtonEventListener(container: HTMLElement): void {
    const button = container.querySelector('.logout-btn') as HTMLElement;

    button.addEventListener('click', async () => {
      const user: User = SessionStorage.getUser() as User;

      await Server.logoutUser(user);
    });
  }
}

export default LogoutButtonController;
