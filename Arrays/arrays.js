const strings = ["a", "b", "c", "d"];

// push
strings.push("e"); // O(1)

// pop
strings.pop(); // O(1)
strings.pop(); // O(1)

// unshift
strings.unshift("wow"); // O(n)

// shift
strings.shift(); // O(n)

// splice
strings.splice(1, 0, "raviranjan"); // O(n)

// reverse
strings.reverse(); // O(n)

// sort
strings.sort(); // O(n log n)

// console.log(strings);

// ----NEXT----
// reference type
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

// console.log(object1 === object2); // true
// console.log(object1 === object3); // false

// ----NEXT----
// Context vs scope

// instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I'm ${this.name}, I'm a ${this.type}`);
  }
}
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Im a ${this.type}`);
  }
}
const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Raviranjan", "Magician");

// console.log(wizard1.play());
// console.log(wizard2.play());
// console.log(wizard1.introduce());
// console.log(wizard2.introduce());
// console.log(new Player("Shelly", "Healer").introduce());

// ----NEXT----
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
const newArray = new MyArray();
newArray.push("Raviranjan");
newArray.push("Mahto");
newArray.push("hi");
newArray.push("hi hi");
// newArray.pop();
newArray.delete(2);
// console.log(newArray);

// ----NEXT----
// Create a function that reverse a string
// 1) using for loop
function reverseString(string) {
  const str = [];
  for (let i = string?.length - 1; i >= 0; i--) {
    str.push(string[i]);
  }
  return str.join("");
}
// console.log(reverseString("My name is raviranjan mahto"));

//2) using split and reverse
function reverseString2(string) {
  return string.split("").reverse().join("");
}
// console.log(reverseString2("My name is raviranjan mahto"));

//3) using spread operator
const reverseString3 = string => [...string].reverse().join("");
console.log(reverseString3("My name is raviranjan mahto"));
