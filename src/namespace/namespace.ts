/**
 * A namespace reduces the number of items added to the global scope
 * not a code way of organizing your code
 */

namespace First {
  export class Example {
    log() {
      console.log("Logging from first");
    }
  }
}

const testNamespace = new First.Example();

//shipping
namespace Shipping {
  const defaultDisplacement = 4000;

  //interface
  export interface Ship {
    name: string;
    port: string;
    displacement: number;
  }

  export class Ferry implements Ship {
    constructor(
      public name: string,
      public port: string,
      public displacement: number
    ) {}
  }

  export class PrivateShip implements Ship {
    constructor(
      public name: string,
      public port: string,
      public displacement: number = defaultDisplacement
    ) {}
  }
}

//test
const ferry = new Shipping.Ferry("Assurance", "London", 3220);
const privateShip = new Shipping.PrivateShip("Titanic", "New York");

//import Namespace
namespace Docking {
  //import Ship from  Shipping namespace
  import Ship = Shipping.Ship;

  export class Dock {
    private dockedShips: Ship[] = [];

    arrival(ship: Ship) {
      this.dockedShips.push(ship);
    }
  }
}

const dock = new Docking.Dock();
