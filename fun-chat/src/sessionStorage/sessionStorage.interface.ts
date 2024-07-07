import User from '../api/api.interfaces';

export interface ISessionStore {
  setUser(user: User): void;
  getUser(): User | null;

  setUserStatus(status: boolean): void;
  getUserStatus(): boolean | null;

  clear(): void;
}
