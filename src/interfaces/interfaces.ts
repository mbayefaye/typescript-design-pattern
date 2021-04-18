export interface DataStore {
  timestamp: number;
  data: string[];
}

export interface DataSyncInfo {
  timestamp: number;
  data: string[];
}

export interface ServerDataItem {
  id: string;
  timestamp: number;
  value: string;
}

export interface ServerDataStore {
  items: {
    [id: string]: ServerDataItem;
  };
}

export interface ClientDataItem {
  id: string;
  value: string;
}

export interface ClientDataStore {
  timestamp: number;
  items: {
    [id: string]: ClientDataItem;
  };
  changes: {
    [id: string]: number;
  };
}

export interface SyncingResponse {
  timestamp: number;
  changes: {
    [id: string]: string;
  };
}

export interface ClientChange {
  lastModifiedTime: number;
  value: string;
}

export interface SyncingRequest {
  timestamp: number;
  changes: {
    [id: string]: ClientChange;
  };
}
