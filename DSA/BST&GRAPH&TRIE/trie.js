class TreeNode {
  constructor() {
    this.child = {};
    this.end = false;
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
    curr.end = true;
  }

  print(curr = this.root, word = "", result = []) {
    if (curr.end) {
      result.push(word);
    }
    for (let c in curr.child) {
      this.print(curr.child[c], word + c, result);
    }
    return result;
  }

  suggestion(word) {
    let curr = this.root;
    let listValues = "";
    for (let c of word) {
      if (curr.child[c]) {
        listValues += c;
        curr = curr.child[c];
      }else{
        return []
      }
    }
    return this.print(curr,listValues)
  }
}

const trie = new Trie();
trie.insert("Madhav");
trie.insert("Madhavaraj");
trie.insert("Hari");
console.log(trie.print());
console.log("your result:",trie.suggestion("Ha"));