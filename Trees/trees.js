class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else if (value === current.value) return current;
    }
    return false;
  }

  remove(value) {
    if (!this.root) return false;
    let current = this.root;
    let parent = null;
    while (current) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      } else if (value > current.value) {
        parent = current;
        current = current.right;
      } else if (current.value === value) {
        if (!current.left && !current.right) {
          if (!parent) this.root = null;
          else if (parent.left === current) parent.left = null;
          else if (parent.right === current) parent.right = null;
        } else if (!current.left) {
          if (!parent) this.root = current.right;
          else if (parent.left === current) parent.left = current.right;
          else if (parent.right === current) parent.right = current.right;
        } else if (!current.right) {
          if (!parent) this.root = current.left;
          else if (parent.left === current) parent.left = current.left;
          else if (parent.right === current) parent.right = current.left;
        }
      }
      return this;
    }
  }
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(tree.lookup(9));
console.log(tree.remove(1));
// console.log(tree);
// console.log(JSON.stringify(tree));
