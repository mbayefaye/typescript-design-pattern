import {Ship} from "./modules";

export class Dock {
  private dockerShips: Ship[] = [];

  arrival(ships: Ship) {
    this.dockerShips.push(ships);
  }
}
