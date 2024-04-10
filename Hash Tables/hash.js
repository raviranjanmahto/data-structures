class HashTables {
  constructor(size) {
    this.size = size;
    this.table = new Array(this.size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
      console.log(this.table);
    }
    this.table[index].push([key, value]);
    return this.table[index];
  } // if collision is there, then O(n) else O(1)

  get(key) {
    let index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return null;
  } // if collision is there, then O(n) else O(1)

  keys() {
    const keysArr = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        keysArr.push(this.table[i][0][0]);
      }
    }
    return keysArr;
  } // O(n)

  values() {
    const valuesArr = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        valuesArr.push(this.table[i][0][1]);
      }
    }
    return valuesArr;
  } // O(n)
}

const myHashTable = new HashTables(50);
// console.log(myHashTable.set("grapes", 1000));
// console.log(myHashTable.set("banana", 10));
// console.log(myHashTable.set("orange", 22));
// console.log(myHashTable.get("orange"));
// console.log(myHashTable.keys());
// console.log(myHashTable.values());

// ----NEXT----
// Find the first recurring number in an array
// 1) using for loop
function recurringNumber(arr) {
  // In this case, Space complexity is O(1)
  for (let i = 0; i < arr?.length; i++) {
    for (let j = i + 1; j < arr?.length; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
  }
} // O(n^2)
console.log(recurringNumber([2, 5, 1, 2, 3, 5, 1, 2, 4]));

// 2) using hash table
function recurringNumber2(arr) {
  let hash = {}; // Space complexity O(n)
  for (let i = 0; i < arr?.length; i++) {
    if (hash[arr[i]]) return arr[i];
    hash[arr[i]] = true;
  }
} // O(n)
console.log(recurringNumber2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
