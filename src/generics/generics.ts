// /// generics function
function reverse<T>(list: T[]): T[] {
  const reverseList: T[] = [];

  for (let index = list.length - 1; index >= 0; index--) {
    reverseList.push(list[index]);
  }

  return reverseList;
}

//test
const reverseTest = reverse<number>([1, 2, 3, 4, 5]);

//generic interfaces
interface Repository<T, Tid> {
  getById(id: Tid): T;
  persist(model: T): Tid;
}

class CustomerId {
  constructor(private customerIdValue: number) {}

  get value() {
    return this.customerIdValue;
  }
}

class Customer {
  constructor(public id: CustomerId, name: string) {}
}

class CustomerRepository implements Repository<Customer, CustomerId> {
  constructor(private customers: Customer[]) {}

  getById(id: CustomerId) {
    return this.customers[id.value];
  }

  persist(customer: Customer) {
    this.customers[customer.id.value] = customer;
    return customer.id;
  }
}

// Generic classes
class Client<T> {
  constructor(private name: T) {}

  get clientName(): T {
    return this.name;
  }
}

class OrderId extends Client<string> {
  constructor(orderIdValue: string) {
    super(orderIdValue);
  }
}

class AccountId extends Client<string> {
  constructor(accountId: string) {
    super(accountId);
  }
}

// Types constraints : used to limit the types that a generic functions , interfaces or class can operate on.
interface PlayerInterface {
  name: string;
  club: string;
  jersey: number;
  capitain?: boolean;
}

class Player {
  static display<T extends PlayerInterface>(obj: T): string {
    return `
        player Name:${obj.name}
        club: ${obj.club}
        Jersey Number:${obj.jersey}
    `;
  }
}
