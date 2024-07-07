import { IAboutIconController } from './aboutIconController.interface';
import { PageIDs } from '../../constants/pagesConstants';
import { PagesRouter } from '../../router/router.singleton';

class AboutIconController implements IAboutIconController {
  public addChatAboutIconEventListener(container: HTMLElement): void {
    const icon = container.querySelector('.chat-about-icon') as HTMLElement;

    icon.addEventListener('click', () => {
      PagesRouter.routeToPage(PageIDs.ABOUT_PAGE);
    });
  }

  public addLoginAboutIconEventListener(container: HTMLElement): void {
    const icon = container.querySelector('.about-icon') as HTMLElement;

    icon.addEventListener('click', () => {
      PagesRouter.routeToPage(PageIDs.ABOUT_PAGE);
    });
  }
}

export default AboutIconController;
