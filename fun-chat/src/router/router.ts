import { IRouter } from './router.interface';
import { PageIDs } from '../constants/pagesConstants';
import AboutPageView from '../ui/aboutPage/aboutPageView';
import ChatPageView from '../ui/chatPage/chatPageView';
import LoginPageView from '../ui/loginPage/loginPageView';
import SessionStorage from '../sessionStorage/sessionStorage.singleton';
import EventsController from '../controller/eventsController/eventsController';

class Router implements IRouter {
  private container: HTMLElement = document.body;

  private eventsController = new EventsController();

  constructor() {
    this.initialize();
  }

  public routeToPage(pageId: string): void {
    this.clearContainer();

    let page: HTMLElement | null = null;

    switch (pageId) {
      case PageIDs.LOGIN_PAGE:
        if (!SessionStorage.getUserStatus()) {
          page = new LoginPageView(pageId).render();
          this.changeHash(pageId);
        } else {
          page = new ChatPageView(PageIDs.CHAT_PAGE).render();
          this.changeHash(PageIDs.CHAT_PAGE);
        }
        break;
      case PageIDs.CHAT_PAGE:
        if (SessionStorage.getUserStatus()) {
          page = new ChatPageView(pageId).render();
          this.changeHash(pageId);
        } else {
          page = new LoginPageView(PageIDs.LOGIN_PAGE).render();
          this.changeHash(PageIDs.LOGIN_PAGE);
        }
        break;
      case PageIDs.ABOUT_PAGE:
        page = new AboutPageView(pageId).render();
        this.changeHash(pageId);
        break;
      default:
        break;
    }

    if (page) {
      this.container.append(page);

      this.eventsController.destruct();

      this.eventsController.initialize();
    }
  }

  private clearContainer(): void {
    this.container.innerHTML = '';
  }

  private changeHash(newHash: string): void {
    window.location.hash = newHash;
  }

  private initialize(): void {
    window.addEventListener('hashchange', () => {
      const newHash = window.location.hash.substring(1);
      this.routeToPage(newHash);
    });

    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
      this.routeToPage(initialHash);
    }
  }
}

export default Router;
