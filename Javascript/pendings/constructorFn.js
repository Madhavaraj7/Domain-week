function createUser(name, age) {
  this.name = name;
  this.age = age;
  this.add = function () {
    console.log(`hello my name is ${this.name} and my age is ${this.age}`);
  };
}

const person1 = new createUser("Madhav",23)
const person2 = new createUser("Hari",23)

person1.add()
person2.add()