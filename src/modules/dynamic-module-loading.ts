declare function require(module: string): string;

import {Ferry} from "./modules";

const condition = true;

if (condition) {
  //only imports if the condition is true
  const ferry: typeof Ferry = require("./modules");
  const myFerry = new ferry("", "", 0);
}
