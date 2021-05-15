// /**
//  * Difference between Interface and Type Alias
//  * An interface can be extends when using class or other interfaces
//  * An interfance can also accept type arguments
//  * but type alias can't do that
//  */

// //interface
interface PersonInterface {
  name: string;
  age: number;
  heightInCentimeters: number;
}

// type alias
type PersonType = {
  name: string;
  heightInCentimeters: number;
};

// //test
const Mbaye: PersonInterface = {
  name: "Mbaye",
  age: 23,
  heightInCentimeters: 1.79,
};

const Maye: PersonType = {
  name: "Maye",
  heightInCentimeters: 1.64,
};

// ///enum
enum VehicleType {
  Car,
  MotorCycle,
  Van,
  Bus,
  Lorry,
}

// //literal Type
type Types = "ADD_CARD" | "Delete_Card" | "Modify_Card";

// //intersection type
interface Skier {
  slide(): void;
}

interface Shooter {
  shoot(): void;
}
type Biathelete = Skier & Shooter;

let biathelete: Biathelete = null;

biathelete.shoot();

// //Arrays

interface Monument {
  name: string;
  heightInMeters: number;
}

const monument: Monument[] = [];

// //add
monument.push({
  name: "Statue of Liberty",
  heightInMeters: 46,
});

monument.push({
  name: "Peter the Great",
  heightInMeters: 96,
});

monument.push({
  name: "Angel of the North",
  heightInMeters: 20,
});

// function compareMonuments(a: Monument, b: Monument) {
//   if (a.heightInMeters > b.heightInMeters) {
//     return -1;
//   }
//   if (a.heightInMeters < b.heightInMeters) {
//     return 1;
//   }
//   return 0;
// }

// //tuples
const Tuples: [number, string] = [0, "Hello"];

// //dictionnary types
interface Cephalopod {
  hasInk: boolean;
  arms: number;
  tentacles: number;
}

interface CephalopodDictionary {
  [index: string]: Cephalopod;
}

let dictionnary: CephalopodDictionary = {};

dictionnary["octopus"] = {
  hasInk: true,
  arms: 8,
  tentacles: 0,
};

// //maped types
interface Options {
  material: string;
  backlight: boolean;
}

// //read only
interface ManualReadOnlyOptions {
  readonly material: string;
  readonly backlight: boolean;
}

// //optional
interface ManualOptionalOptions {
  material?: string;
  backlight?: string;
}

// //nullable
interface ManualNullableOptions {
  material: string | null;
  backlight: string | null;
}

//type assertions

interface House {
  bedrooms: number;
  bathrooms: number;
}

interface Mansion {
  bedrooms: number;
  bathrooms: number;
  butlers: number;
}

function getProperty(): House | Mansion {
  return {
    bedrooms: 2,
    bathrooms: 4,
  };
}
