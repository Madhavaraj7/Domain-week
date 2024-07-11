class Minheap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    let A = this.heap;
    A.push(val);

    let i = A.length - 1;

    while (A.length > 1 && A[i] < A[this.parent(i)]) {
      [A[i], A[this.parent(i)]] = [A[this.parent(i)], A[i]];
      i = this.parent(i);
    }
  }

  extractMin() {
    const A = this.heap;
    const min = A[0];
    A[0] = A.length - 1;

    let i = 0;

    while (i < A.length) {
      let C =
        A[this.child1(i)] < A[this.child2(i)] ? this.child1(i) : this.child2(i);
      if (A[C] < A[i]) {
        [A[i], A[C]] = [A[C], A[i]];
        i = C;
      }else{
        break
      }
    }
    A.pop()
    return min
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  child1(index) {
    return index * 2 + 1;
  }

  child2(index) {
    return index * 2 + 2;
  }
}

const heap = new Minheap();
heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(11);
heap.insert(40);
heap.insert(50);
heap.insert(4);
console.log(heap.heap);
heap.extractMin()
heap.extractMin()
console.log(heap.heap);

