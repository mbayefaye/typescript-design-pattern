import {
  DataStore,
  SyncingResponse,
  SyncingRequest,
  ServerDataStore,
} from "../interfaces/interfaces";
class Server {
  store: ServerDataStore = {
    timestamp: 0,
    data: "",
  };

  synchronize(request: SyncingRequest): SyncingResponse {
    //request lastimestamp
    let lastimestamp = request.timestamp;
    //get the date
    let now = Date.now();
    //changes
    let serverChanges = Object.create(null);
    let items = this.store.items;
    for (const id of Object.keys(items)) {
      let item = items[id];
      if (item.timestamp > lastimestamp) {
        serverChanges[id] = item.value;
      }
    }
    return {
      timestamp: now,
      changes: serverChanges,
    };
  }
}

export {Server};
