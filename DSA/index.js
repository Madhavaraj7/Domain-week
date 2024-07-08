class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  AddToLast(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  AddToFirst(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  removeLast() {
    if (!this.head) {
      return undefined;
    }

    if (this.size === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return removedNode;
    } else {
      let curr = this.head;
      while (curr.next.next !== null) {
        curr = curr.next;
      }
      const removedNode = this.tail;
      curr.next = null;
      this.tail = curr;
      this.size--;
      return removedNode.val;
    }
  }

  removeFirst() {
    if (!this.head) {
      return undefined;
    }
    let removed;
    if (this.size === 1) {
      removed = this.head;
      this.head = null;
      this.tail = null;
    } else {
      removed = this.head;
      this.head = this.head.next;
      this.size--;
    }
    return removed.val;
  }

  insert(val, index) {
    const node = new Node(val);
    if (index < 0 && index > this.size) {
      return false;
    }
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      this.size++;
      return;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
    this.size++;
    return;
  }

  reverse() {
    if (!this.head) {
      return undefined;
    }
    if (this.size === 1) {
      return this.head;
    }

    let curr = this.head;
    let prev = null;
    while (curr) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    this.head = prev;
  }

  print() {
    if (this.size > 0) {
      let curr = this.head;
      let listValues = "";

      while (curr) {
        listValues += `${curr.val} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();

list.AddToLast(10);
list.AddToLast(20);
list.AddToLast(30);
list.AddToLast(40);
list.AddToLast(50);
list.AddToFirst(5);
console.log("removed value", list.removeLast());
console.log("removed First", list.removeFirst());
list.print();
list.insert(10, 0);
list.print();
list.reverse()
list.print();


// console.log(list);
