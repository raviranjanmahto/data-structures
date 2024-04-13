class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Using Linked List to implement Stack (Last In First Out) logic in JavaScript
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) return null;

    if (this.top === this.bottom) this.bottom = null;

    this.top = this.top.next;
    this.length--;
    return this;
  }
}
const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.pop();
myStack.pop();
myStack.pop();
// console.log(myStack.peek());
// console.log(myStack);

// ----NEXT----
// Using Arrays to implement Stack (Last In First Out) logic in JavaScript
class ArrayStack {
  constructor() {
    this.stack = [];
  }
  peek = () => this.stack[this.stack.length - 1];

  push(value) {
    this.stack.push(value);
    return this;
  }
  pop = () => this.stack.pop();
}
const myStack2 = new ArrayStack();
myStack2.push("google");
myStack2.push("udemy");
myStack2.push("discord");
myStack2.pop();
// myStack2.pop();
// myStack2.pop();
console.log(myStack2.peek());
console.log(myStack2);
