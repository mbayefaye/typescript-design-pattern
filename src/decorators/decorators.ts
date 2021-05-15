//decorator function
function log(target: any, key: string, description: any) {
  console.log(key);
}

// using the decorator
class Calculator {
  //using the decorator
  @log
  square(n: number) {
    return n * n;
  }
}
