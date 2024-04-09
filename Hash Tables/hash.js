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
  }

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
  }
}

const myHashTable = new HashTables(2);
console.log(myHashTable.set("grapes", 100));
console.log(myHashTable.set("banana", 10));
console.log(myHashTable.set("orange", 22));
console.log(myHashTable.get("orange"));
