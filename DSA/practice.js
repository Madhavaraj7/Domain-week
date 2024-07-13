function* genaratorFn(a) {
  while (true) {
    yield Math.pow(a,(++a), +1);
  }
}

let newFn = genaratorFn(2);

for (let i = 0; i < 5; i++) {
  console.log(newFn.next().value);
}
