//wheel cleanup
interface WheelCleaning {
  cleanWheels(): void;
}

class BasicWheelCleaning implements WheelCleaning {
  cleanWheels() {
    console.log("soaping wheels");
    console.log("brushing wheels");
  }
}

class ExecutiveWheelCleaning extends BasicWheelCleaning {
  cleanWheels() {
    super.cleanWheels();
    console.log("Waxing wheels");
    console.log("Rinsing wheels");
  }
}

//body cleanup
interface BodyCleaning {
  cleanBody(): void;
}

class BasicBodyCleaning implements BodyCleaning {
  cleanBody() {
    console.log("Soaping car");
    console.log("Rinsing Car");
  }
}

class ExecutiveBodyCleaning extends BasicBodyCleaning {
  cleanBody() {
    super.cleanBody();
    console.log("Waxing car");
    console.log("Blow drying car");
  }
}

// using stategy
class CarWashProgram {
  constructor(private washLevel: number) {}

  runWash() {
    let wheelWash: WheelCleaning;
    let bodyWash: BodyCleaning;

    switch (this.washLevel) {
      case 1:
        wheelWash = new BasicWheelCleaning();
        wheelWash.cleanWheels();
        bodyWash = new BasicBodyCleaning();
        bodyWash.cleanBody();
        break;

      case 2:
        wheelWash = new BasicWheelCleaning();
        wheelWash.cleanWheels();
        bodyWash = new ExecutiveBodyCleaning();
        bodyWash.cleanBody();
        break;
      case 3:
        wheelWash = new BasicWheelCleaning();
        wheelWash.cleanWheels();
        bodyWash = new ExecutiveBodyCleaning();
        bodyWash.cleanBody();
        break;
    }
  }
}
