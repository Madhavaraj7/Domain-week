import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello Madhav</h1>");
});

app.get("/number/:n", (req, res) => {
  let n = req.params.n;
  let arr = [];
  for (let i = 1; i < n; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  res.send(arr)
});

app.listen(3000, () => {
  console.log("server is running");
});
