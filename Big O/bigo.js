const raviranjan = ["raviranjan"];
const fruits = ["Mango", "Guava", "Apple", "orange"];

const largeArr = new Array(1000).fill("raviranjan");

function findRaviranjan(array) {
  // let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "raviranjan") {
      console.log("Found RAVIRANJAN");
    }
  }
  // let t1 = performance.now();
  // console.log("Call to find Raviranjan took " + (t1 - t0) + " milliseconds");
}

// findRaviranjan(largeArr);

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

const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function firstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

firstTwoBoxes(boxes); // O(2)
