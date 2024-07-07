import { Server } from '../api/api.singleton';
import { PageIDs } from '../constants/pagesConstants';
import { PagesRouter } from '../router/router.singleton';
import { IApp } from './app.interface';

class App implements IApp {
  public async start(): Promise<void> {
    await Server.connect();

    PagesRouter.routeToPage(PageIDs.LOGIN_PAGE);
  }
}

export default App;
