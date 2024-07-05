var isEven = (num) => {
  //   if (num % 2 === 0) {
  //     return true;
  //   }
  //   return false

  return num % 2 === 0;
};

console.log(isEven(8));

var result = [2, 4, 8].every((e) => {
  return e % 2 === 0;
});
console.log(result);
