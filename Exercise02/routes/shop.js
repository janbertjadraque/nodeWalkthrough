const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("This is the last middleware");
  res.send("<h1>Hello this is the last middleware</h1>");
});

module.exports = router;
