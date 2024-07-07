import { IEventBus, Registry, Subscriber } from './eventBus.interface';

class EventBus implements IEventBus {
  private subscribers: Subscriber;

  private static nextId = 0;

  constructor() {
    this.subscribers = {};
  }

  public dispatch<T>(event: string, arg?: T): void {
    const subscriber = this.subscribers[event];

    if (subscriber === undefined) {
      return;
    }

    Object.keys(subscriber).forEach((key) => {
      if (arg !== undefined) {
        (subscriber[key] as (arg: T) => void)(arg);
      }
    });
  }

  public register<T>(event: string, callback: (arg: T) => void): Registry {
    const id = this.getNextId();

    if (!this.subscribers[event]) {
      this.subscribers[event] = {};
    }

    this.subscribers[event][id] = (...args: unknown[]) => {
      if (args.length > 0) {
        const arg = args[0] as T;
        callback(arg);
      }
    };

    return {
      unregister: () => {
        delete this.subscribers[event][id];
        if (Object.keys(this.subscribers[event]).length === 0) {
          delete this.subscribers[event];
        }
      },
    };
  }

  private getNextId(): number {
    EventBus.nextId += 1;
    return EventBus.nextId;
  }
}

export default EventBus;
