import { ISessionStore } from './sessionStorage.interface';
import User from '../api/api.interfaces';

class SessionStore implements ISessionStore {
  public setUser(user: User): void {
    sessionStorage.setItem('User', JSON.stringify(user));
  }

  public getUser(): User {
    const user = sessionStorage.getItem('User') as string;

    return JSON.parse(user) as User;
  }

  public setUserStatus(status: boolean): void {
    sessionStorage.setItem('isLogined', JSON.stringify(status));
  }

  public getUserStatus(): boolean | null {
    const isLogined = sessionStorage.getItem('isLogined');

    return isLogined ? JSON.parse(isLogined) : null;
  }

  public clear(): void {
    sessionStorage.clear();
  }
}

export default SessionStore;
