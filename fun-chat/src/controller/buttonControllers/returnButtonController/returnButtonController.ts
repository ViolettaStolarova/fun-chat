import { IReturnButtonController } from './returnButtonController.interface';
import { Server } from '../../../api/api.singleton';
import { PageIDs } from '../../../constants/pagesConstants';
import { PagesRouter } from '../../../router/router.singleton';
import SessionStorage from '../../../sessionStorage/sessionStorage.singleton';

class ReturnButtonController implements IReturnButtonController {
  public addReturnButtonEventListener(container: HTMLElement): void {
    const returnButton = container.querySelector('.return-btn') as HTMLElement;

    returnButton.addEventListener('click', async () => {
      if (SessionStorage.getUserStatus()) {
        PagesRouter.routeToPage(PageIDs.CHAT_PAGE);

        await Server.getActiveUsers();
        await Server.getInactiveUsers();
      } else {
        PagesRouter.routeToPage(PageIDs.LOGIN_PAGE);
      }
    });
  }
}

export default ReturnButtonController;
