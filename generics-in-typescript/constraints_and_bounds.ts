// Constraints are rules or conditions that you specify for the types that can be used with a generic construct. These rules help ensure that the generic code can only be instantiated or called with types that fulfill the specified conditions.

interface Repo {
     id: number;
}

class Repository<T extends Repo> {
     private items: T[] = [];

     add(item: T) {
          this.items.push(item);
     }

     getById(id: number): T | undefined {
          return this.items.find(item => item.id === id);
     }
}

interface user {
     id: number;
     name: string;
}


const userRepo = new Repository<user>();
userRepo.add({ id: 1, name: "test" });

const user = userRepo.getById(1);



// example 2 

interface Lengthy {
     length: number;
}

function getLength<T extends Lengthy>(value: T): number {
     return value.length;
}

const stringLength = getLength("Hello, TypeScript!");
const arrayLength = getLength([1, 2, 3, 4, 5]);
// const aarrayLength = getLength(2);


// Valid, as arrays also have a length property
// const invalidLength = getLength(42);                // Error, numbers do not have a length property
