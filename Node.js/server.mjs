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

app.get('/search', (req, res) => {
  const searchQuery = req.query.q;
  res.send(`Search Query: ${searchQuery}`);
});

// Route with both req.params and req.query
app.get('/user/:id/details', (req, res) => {
  const userId = req.params.id;
  const filter = req.query.filter;
  res.send(`User ID: ${userId}, Filter: ${filter}`);
});

app.listen(3000, () => {
  console.log("server is running");
});
