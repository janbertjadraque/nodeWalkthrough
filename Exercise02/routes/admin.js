const express = require("express");

const router = express.Router();

router.get("/createUser", (req, resp, next) => {
  resp.send("<h1>You are in the add user page YOYOYO</h1>");
});

module.exports = router;
