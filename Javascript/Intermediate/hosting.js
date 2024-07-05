tipper("60");

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}

var biggerTipper = function (a) {
  var bill = parseInt(a);
  console.log(bill + 5);
};
biggerTipper("200");

var name = "Madhav";
console.log(name);

function sayName() {
  var name = "Hari";
  console.log(name);
}
sayName();

console.log(name);
