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
  const createdProduct = new Product({
    id: req.body.id,
    item: req.body.item,
  });
  const result = await createdProduct.save();

  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
}
exports.getProducts = getProducts;
exports.createProduct = createProduct;