import fs from "fs";
// import { inflate } from "zlib";

const filePath = "Node.js/file.txt";

console.log("first");
fs.readFile(filePath, "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
console.log("third");

// fs.appendFile(filePath, "Hello jithin \n", (err, sucess) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(sucess);
//   }
// });

fs.unlink(filePath, (unlinkError) => {
  if (unlinkError) {
    console.log('Error deleting file:', unlinkError);
  } else {
    console.log('File deleted successfully');
  }
});

// fs.writeFile(filePath, "Hello suresh", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });


