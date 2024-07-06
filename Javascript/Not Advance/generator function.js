// A generator function in JavaScript allows you to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions use the function* syntax, and yield is used to pause and resume the function's execution.


function* generatorFn() {
    let count = 10;
    while (true) {
      yield count;
      count += 10;
    }
  }
  
  const generator = generatorFn();
  
  console.log(generator.next().value); 
  console.log(generator.next().value); 
  console.log(generator.next().value); 

  



//   function* generatorFn(limit) {
//     let count = 10;
//     while (count <= limit) {
//       yield count;
//       count += 10;
//     }
//   }
  
//   const generator = generatorFn(50);
  
//   console.log(generator.next().value); 
//   console.log(generator.next().value); 
//   console.log(generator.next().value); 
//   console.log(generator.next().value); 
//   console.log(generator.next().value);

//   console.log(generator.next().done);  