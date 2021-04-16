import {DataStore} from "../interfaces/interfaces";
class Server {
  store: DataStore = {
    timestamp: 0,
    data: "",
  };

  synchronize(clientDataStore: DataStore): DataStore {
    if (clientDataStore.timestamp > this.store.timestamp) {
      this.store = clientDataStore;
    } else if (clientDataStore.timestamp < this.store.timestamp) {
      return this.store;
    } else {
      return undefined;
    }
  }
}

export {Server};
