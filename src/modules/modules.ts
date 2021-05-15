/**
 * modules are entirely self-contained and place nothing in the global scope.
 * In my opinion module  is the best way of organizing your code.
 */
const defaultDisplacement = 4000;

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
