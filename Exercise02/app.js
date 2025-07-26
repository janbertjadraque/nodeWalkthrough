const express = require("express");

const admin = require("./routes/admin");
const shop = require("./routes/shop");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
//app.use(bodyParser.json());

app.use("/admin", admin);
app.use(shop);

app.use((req, resp, next) => {
  resp.status(404).send("<h1>404 Page Not Found</h1>");
});

app.listen(3000);
