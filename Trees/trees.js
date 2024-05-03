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
      if (value === current.value) {
        if (!current.left && !current.right) {
          if (!parent) this.root = null;
          else if (parent.left === current) parent.left = null;
          else parent.right = null;

          return true;
        } else if (!current.right) {
          if (!parent) this.root = current.left;
          else if (parent.left === current) parent.left = current.left;
          else parent.right = current.left;

          return true;
        } else if (!current.left) {
          if (!parent) this.root = current.right;
          else if (parent.left === current) parent.left = current.right;
          else parent.right = current.right;

          return true;
        } else {
          let successor = current.right;
          let successorParent = current;
          while (successor.left) {
            successorParent = successor;
            successor = successor.left;
          }
          current.value = successor.value;
          if (successorParent.left === successor)
            successorParent.left = successor.right;
          else successorParent.right = successor.right;

          return true;
        }
      } else if (value < current.value) {
        parent = current;
        current = current.left;
      } else {
        parent = current;
        current = current.right;
      }
    }
    return false;
  }

  breadthFirstSearch() {
    if (!this.root) return false;
    let queue = [];
    let list = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      list.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return list;
  }

  breadthFirstSearchRecursive(queue, list) {
    if (!queue.length) return list;
    let current = queue.shift();
    list.push(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    return this.breadthFirstSearchRecursive(queue, list);
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
console.log(JSON.stringify(tree));
console.log(tree.breadthFirstSearch());
console.log(tree.breadthFirstSearchRecursive([tree.root], []));
