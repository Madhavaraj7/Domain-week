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
    return;
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
    return;
  }

  insert(val, index) {
    const node = new Node(val);
    if (index < 0 || index > this.size) {
      return undefined;
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

  removeFromIndex(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    if (curr) {
      curr.next = curr.next.next;
      this.size--;
      return;
    }
  }

  removeFromValue(val) {
    if (val === this.head.val) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let curr = this.head;
    let prev = curr;
    while (curr && curr.val !== val) {
      prev = curr;
      curr = curr.next;
    }
    if (curr) {
      prev.next = curr.next;
      if (curr === this.tail) {
        this.tail = prev;
      }
    }
    this.size--;
    return
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
list.AddToLast(22);
list.AddToLast(222);
list.AddToLast(28);

// console.log(list);
list.insert(11, 2);
list.print();
// console.log(list);
// list.removeFromIndex(4);
list.removeFromValue(28)



list.print();
