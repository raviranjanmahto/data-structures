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
strings.sort(); // O(n)

console.log(strings);
