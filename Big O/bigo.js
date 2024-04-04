const raviranjan = ["raviranjan"];
const fruits = ["Mango", "Guava", "Apple", "raviranjan", "orange", "pineapple"];

const largeArr = new Array(1000).fill("raviranjan");

function findRaviranjan(array) {
  // let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] === "raviranjan") {
      console.log("Found RAVIRANJAN");
      break;
    }
  }
  // let t1 = performance.now();
  // console.log("Call to find Raviranjan took " + (t1 - t0) + " milliseconds");
}

const findRaviranjan2 = array => {
  array.forEach(element => {
    if (element === "raviranjan") console.log("Found RAVIRANJAN");
  });
};

const findRaviranjan3 = array => {
  for (let element of array) {
    if (element === "raviranjan") console.log("Found RAVIRANJAN");
  }
};
// findRaviranjan3(fruits);

// findRaviranjan2(fruits);

// findRaviranjan(fruits);

// ----NEXT----

// #Big O Cheat Sheet:
// -Big OsO(1) Constant- no loops
// O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
// O(n) Linear- for loops, while loops through n items
// O(n log(n)) Log Linear- usually sorting operations
// O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops
// O(2^n) Exponential- recursive algorithms that solves a problem of size N
// O(n!) Factorial- you are adding a loop for every element
// Iterating through half a collection is still O(n)
// Two separate collections: O(a * b)
// -What can cause time in a function?-
// Operations (+, -, *, /)
// Comparisons (<, >, ==)
// Looping (for, while)
// Outside Function call (function())
// -Rule BookRule 1: Always worst Case
// Rule 2: Remove Constants
// Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
// O(a*b)
// + for steps in order
// * for nested steps
// Rule 4: Drop Non-dominant terms
// -What causes Space complexity?-
// Variables
// Data Structures
// Function Call
// Allocations

// ----NEXT----

const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function firstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

// firstTwoBoxes(boxes); // O(2)

// ----NEXT----

function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
// funChallenge(); // BIG O = (3 + 4n) === O(n)

// ----NEXT----

function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// BIG O = 4 + 7n = O(n)

// ----NEXT----
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
} // O(1) + O(n/2) + O(100) = O(n)

// ----NEXT----
const boxes1 = ["a", "b", "c", "d", "e"];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

// logAllPairsOfArray(boxes1); // O(n * n) = O(n^2)

// ----NEXT----
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(element => console.log(element));
  boxes2.forEach(element => console.log(element));
} // O(a + b)

// ----NEXT----
function printAllNumbersThenAllPairSums(numbers) {
  console.log("These are the numbers:");
  numbers.forEach(elements => console.log(elements));

  console.log("And these are their sums:");
  numbers.forEach(firstNumber => {
    numbers.forEach(secondNumber => console.log(firstNumber + secondNumber));
  });
}

// printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]); // O(n * n) = O(n^2)

// ----NEXT----

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];

const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "x"];

// 1)
// function containCommonItems(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] === array2[j]) return true;
//     }
//   }
//   return false;
// }
// console.log(containCommonItems(array3, array4)); // O(n) * O(n) = O(n^2)

// 2)
function containCommonItems2(array1, array2) {
  let map = {};
  for (let i = 0; i < array1?.length; i++) {
    if (!map[array1[i]]) map[array1[i]] = true;
  }
  for (let j = 0; j < array2?.length; j++) {
    if (map[array2[j]]) return true;
  }
  return false;
}
// console.log(containCommonItems2(array3, array4)); // O(n) + O(n) = O(n)

// 3)
function containsCommonItems3(array1, array2) {
  return array1.some(item => array2.includes(item));
}
console.log(containsCommonItems3(array3, array4)); // O(n) * O(n) = O(n^2)
