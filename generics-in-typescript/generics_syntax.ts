// functions
function identity<T>(arg: T): T {
     return arg;
}

let result = identity<string>("Hello");

// ---------------------------------------------------------------

// interfaces
interface Container<T> {
     value: T;
}

let value: Container<number> = { value: 42 };

// ---------------------------------------------------------------

// classes
class GenericClass<T> {
     value: T;

     constructor(value: T) {
          this.value = value;
     }
}

let instance = new GenericClass<string>("Hello");


// default 
function defaultValue<T = string>(arg: T): T {
     return arg;
}
let result1 = defaultValue("Hello");
let result2 = defaultValue<number>(42);
