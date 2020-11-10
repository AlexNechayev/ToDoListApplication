const mongoose = require('mongoose');

const Product = require('./models/items');

mongoose.connect(
  'mongodb+srv://alex:rQDyfrrM8xDVArV@cluste.1zvnk.mongodb.net/test?retryWrites=true&w=majority'
).then(() => {
    console.log('Connected to database!')
}).catch(() => {
    console.log('Connection failed!')
});

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    id: req.body.id,
    item: req.body.item
  });
  const result = await createdProduct.save();

  res.json(result);
};

exports.createProduct = createProduct;
