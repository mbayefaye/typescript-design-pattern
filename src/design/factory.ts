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

//factory
interface ValetFactory {
  getWheelCleaning(): WheelCleaning;
  getBodyCleaning(): BodyCleaning;
}

//basic wash
class BronzeWashFactory implements ValetFactory {
  getWheelCleaning() {
    return new BasicWheelCleaning();
  }
  getBodyCleaning() {
    return new BasicBodyCleaning();
  }
}

//silver wash
class SilverWashFactory implements ValetFactory {
  getWheelCleaning() {
    return new BasicWheelCleaning();
  }
  getBodyCleaning() {
    return new ExecutiveBodyCleaning();
  }
}

//goldwash
class GoldWashFactory implements ValetFactory {
  getWheelCleaning() {
    return new ExecutiveWheelCleaning();
  }
  getBodyCleaning() {
    return new ExecutiveBodyCleaning();
  }
}

//using the factory
class CarWashProgram {
  constructor(private cleaningFactory: ValetFactory) {}
  runWash() {
    const wheelWash = this.cleaningFactory.getWheelCleaning();
    wheelWash.cleanWheels();
    const bodyWash = this.cleaningFactory.getBodyCleaning();
    bodyWash.cleanBody();
  }
}
