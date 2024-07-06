// pure Fn
// Returns the same output for the same input: Given the same arguments, it will always produce the same result.

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
console.log(add(2, 3));

//Impure Fn
//May produce different outputs for the same input: The result can vary even if the same arguments are passed.

let counter = 0;

function increment() {
  counter++;
  return counter;
}

console.log(increment()); // 1
console.log(increment()); // 2 (different output for the same input)

