const express = require("express");

const router = require("./routes/admin");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This always runs");
  next();
});

app.use(router);

app.use("/", (req, res, next) => {
  console.log("This is the last middleware");
  res.send("<h1>Hello this is the last middleware</h1>");
});

app.listen(3000);
