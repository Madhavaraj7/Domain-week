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
    if (root) {
      this.print(root.left, result);
      result.push(root.val);
      this.print(root.right, result);
      return result;
    }
  }

  bfs() {
    if (!this.root) {
      return null;
    }

    const queue = [];
    const result = [];

    queue.push(this.root);

    while (queue.length) {
      let curr = queue.shift();
      result.push(curr);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    return result;
  }
  min(root) {
    if (!root.left) {
      return root.val;
    } else {
      return this.min(root.left);
    }
  }

  Height(node = this.root) {
    if (!node) {
      return -1;
    }
    let leftHeight = this.Height(node.left);
    let rightHeight = this.Height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  isBalanced(node = this.root) {
    if (!node) {
      return true;
    }
    const HeightDiffernce = Math.abs(
      this.Height(node.left) - this.Height(node.right)
    );
    if (HeightDiffernce > 1) {
      return false;
    }
    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }
}

const bst = new binarySearchTree();
bst.insert(20);
bst.insert(10);
bst.insert(38);
bst.insert(3);


console.log(bst.bfs());
console.log(bst.min(bst.root));
console.log(bst.Height());
console.log(bst.isBalanced());
