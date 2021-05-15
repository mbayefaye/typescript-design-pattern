///modifiers
//private
//public
//protected

class Person {
  constructor(public name: string) {}

  getName(): string {
    return this.name;
  }

  static query() {
    return this.name;
  }
}

const t = Person.query();

// abstract class
abstract class Logger {
  abstract notify(message: string): void;

  protected getMessage(message: string): string {
    return `Information :${message}`;
  }
}

class ConsoleLogger extends Logger {
  notify(message: string) {
    console.log(this.getMessage(message));
  }
}

const v = new ConsoleLogger().notify("hello");
