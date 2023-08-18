// A Queue is a common data structure that follows the First-In-First-Out (FIFO) principle. It's often used to manage a collection of items where items are added to the back (enqueue) and removed from the front (dequeue).


class Queue<T> {
     private items: T[] = [];

     enqueue(item: T) {
          this.items.push(item);
     }

     dequeue(): T | undefined {
          return this.items.shift();
     }

     size(): number {
          return this.items.length;
     }

     isEmpty(): boolean {
          return this.items.length === 0;
     }
}

// Usage
const stringQueue = new Queue<string>();
stringQueue.enqueue("Hello");
stringQueue.enqueue("World");
console.log(stringQueue.dequeue()); // Output: Hello

const numberQueue = new Queue<number>();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
console.log(numberQueue.dequeue()); // Output: 1


interface USER<T> {
     name: string;
     age: number;
     data: T
}
const objectQueue = new Queue<USER<{ IdNumber: number }>>();
objectQueue.enqueue({ name: "pratik", age: 24, data: { IdNumber: 1 } })
const last_user_details = objectQueue.dequeue();