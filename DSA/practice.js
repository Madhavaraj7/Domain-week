class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.val < root.val) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  print(root = this.root, result = []) {
    if (root === null) {
      return result;
    }
    this.print(root.left, result);
    result.push(root.val);
    this.print(root.right, result);
    return result;
  }
}

const bst = new binarySearchTree();

bst.insert(10);
bst.insert(20);
bst.insert(30);
bst.insert(40);
bst.insert(50);
bst.insert(60);
console.log(bst.print());