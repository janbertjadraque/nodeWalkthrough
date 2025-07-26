const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/createProduct", (req, resp, next) => {
  resp.sendFile(path.join(__dirname, "../", "views", "createProduct.html"));
});

router.post("/createProduct", (req, resp, next) => {
  console.log(req.body);
  resp.redirect("/admin/productList");
});

router.get("/productList", (req, resp, next) => {
  resp.sendFile(path.join(__dirname, "../", "views", "createProduct.html"));
});
module.exports = router;
