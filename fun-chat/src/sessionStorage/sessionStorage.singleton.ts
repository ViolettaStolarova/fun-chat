import SessionStore from './sessionStorage';
import { ISessionStore } from './sessionStorage.interface';

const SessionStorage: ISessionStore = new SessionStore();
export default SessionStorage;
