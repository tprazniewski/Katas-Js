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
tree.insert(14);
tree.insert(5);
tree.insert(3);
tree.insert(90);
tree.insert(1);
tree.insert(3);
tree.insert(10);
tree.insert(1);

console.log(tree);
