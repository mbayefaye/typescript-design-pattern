import {ClientDataStore} from "../interfaces/interfaces";
import {Server} from "../server/server";

class Client {
  store: ClientDataStore = {
    timestamp: 0,
    items: Object.create(null),
  };
  constructor(public server: Server) {}

  synchronize(): void {
    let store = this.store;

    let response = this.server.synchronize({
      timestamp: store.timestamp,
    });

    let clientItems = store.items;
    let serverchanges = response.changes;

    for (const id of Object.keys(serverchanges)) {
      clientItems[id] = {
        id,
        value: serverchanges[id],
      };
    }
    this.store.timestamp = response.timestamp;
  }

  update(id: string, value: string): void {
    let store = this.store;
    store.items[id] = {
      id,
      value,
    };
    store.changes[id] = Date.now();
  }
}

export {Client};
