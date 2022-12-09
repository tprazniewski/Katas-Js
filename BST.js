class BST {
  constructor(root = null) {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return false;
      if (val < this.root.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        {
          current = current.left;
        }
      } else if (val > this.root.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
  find(val) {
    if (!this.root) return false;
    let current = this.root;

    while (current) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(15);
tree.insert(12);
tree.insert(5);
tree.insert(3);
console.log(tree.find(5));
