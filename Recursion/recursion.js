let counter = 0;
function inception() {
  console.log(counter);
  if (counter > 3) return "done!";
  counter++;
  return inception();
}
// const incept = inception();
// console.log(incept);

// ----Next----

// Write two function that finds the factorial of any number. One should use recursive, the other should just use a for loop.
function findFactorialRecursive(num) {
  if (num === 0) return 1;
  return num * findFactorialRecursive(num - 1);
}
// console.log(findFactorialRecursive(0)); // O(n)

function findFactorialIterative(num) {
  if (typeof num !== "number" || num < 0) return "Invalid number";
  let factorial = 1;
  for (let i = num; i >= 1; i--) factorial = factorial * i;
  return factorial;
}
// console.log(findFactorialIterative(6));

// ----Next----
// Fibonacci sequence that return index
function fibonacciIterative(num) {
  let array = [0, 1];
  for (let i = 2; i <= num; i++) array.push(array[i - 1] + array[i - 2]);
  return array[num];
}
console.log(fibonacciIterative(40)); // O(n)

function fibonacciRecursive(num) {
  if (num < 2) return num;
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}
console.log(fibonacciRecursive(40)); // O(2^n)

// ----Next----
