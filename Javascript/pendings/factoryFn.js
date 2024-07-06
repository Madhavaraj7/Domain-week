function CreateUser(name, age) {
  return {
    name: name,
    age: age,
    add() {
      console.log(`hello my name is ${this.name} and my age is ${this.age}`);
    },
  };
}

const person1 = CreateUser("Madhav", 23);
const person2 = CreateUser("Hunais", 23);

person1.add();
person2.add();
