var name = "Madhav";

console.log("Line number 3", name);

function sayName() {
  var name = "Hari";
  console.log("Line number 6", name);
  sayNameTwo();

  function sayNameTwo() {
    var name = "pranav"
    console.log("Line number 12", name);
  }
}

sayName();
