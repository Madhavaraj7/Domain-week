class TreeNode {
  constructor() {
    this.child = {};
    this.endWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TreeNode();
  }

  insert(word) {
    let curr = this.root;
    for (let c of word) {
      if (!curr.child[c]) {
        curr.child[c] = new TreeNode();
      }
      curr = curr.child[c];
    }
    curr.endWord = true;
  }

  print(curr = this.root, word = "", result = []) {
    if (curr.endWord) {
      result.push(word);
    }

    for (let c in curr.child) {
      this.print(curr.child[c], word + c, result);
    }

    return result;
  }
}

const list = new Trie();
list.insert("Madhav")
list.insert("Madhavaraj")
list.insert("Hari")
console.log(list.print());
