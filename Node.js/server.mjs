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
  res.send(arr);
});

app.get("/search", (req, res) => {
  const searchQuery = req.query.q;
  res.send(`Search Query: ${searchQuery}`);
});

// Route with both req.params and req.query
app.get("/user/:id/details", (req, res) => {
  const userId = req.params.id;
  const filter = req.query.filter;
  res.send(`User ID: ${userId}, Filter: ${filter}`);
});

app.get("/error", (req, res, next) => {
  const error = new Error("Something went wrong");
  error.status = 500;
  next(error);
});

app.use((err, req, res, next) => {
  // console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("server is running");
});
