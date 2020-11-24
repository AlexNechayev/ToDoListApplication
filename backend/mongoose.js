const { json } = require("body-parser");
const mongoose = require("mongoose");

const Product = require("./models/items");

mongoose
  .connect(
    "mongodb+srv://alex:IGoE6L9FAMeNBfRh@cluster.drpjj.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const createProduct = async (req, res, next) => {
  console.log("\nPost request called");
  //creates new product by the given attributes
  const createdProduct = new Product({
    item: req.body.item,
    complete: req.body.complete,
  });
  //saves the product obj into database and initiate it to the result variable
  const result = await createdProduct.save();

  //parse the result in json format
  res.json(result);
};

const getProducts = async (req, res, next) => {
  console.log("\nGet request called");
  //pulls the data from the database (listening on localhost:5000/items)
  const products = await Product.find().exec();

  //parse the given products in json format
  res.json(products); //sends as objects
};

const deleteProducts = async (req, res, next) => {
  console.log("\nDelete request called");
  const product = await Product.findOneAndDelete(req.body._id).exec();
  res.json("Deleted" + product);
};

const patchProduct = async (req, res, next) => {
  console.log("\nPatch request called");

  const product = await Product.updateOne(
    req.body._id,
    (req.body.complete = !req.body.complete)
  ).exec();
  res.json(product);
};

exports.getProducts = getProducts;
exports.createProduct = createProduct;
exports.deleteProducts = deleteProducts;
exports.patchProduct = patchProduct;
