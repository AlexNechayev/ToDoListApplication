const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./mongoose");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
  next();
});

app.post("/items", mongoose.createProduct);

app.get("/items", mongoose.getProducts);

app.delete("/items/:id",mongoose.deleteProducts);

app.patch("/items/:id",mongoose.patchProduct);

app.listen(5000);
