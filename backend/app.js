const express = require("express");
const bodyParser = require("body-parser");
//const mongoPractice = require("./mongo");
const mongoPractice = require("./mongoose");

const app = express();

app.use(bodyParser.json());

app.post("/items", mongoPractice.createProduct);

app.get("/items", mongoPractice.getProducts);

app.listen(3000);
