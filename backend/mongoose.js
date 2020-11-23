const mongoose = require('mongoose');

const Product = require('./models/todo');

mongoose.connect(
  "mongodb+srv://naum4ik:naumchas2010@cluster0.wxzfi.mongodb.net/todos?retryWrites=true&w=majority"
).then(() => {
    console.log('Connected to database!')
}).catch(() => {
    console.log('Connection failed!')
});

const createProduct = ('/create', (req, res) => {
  res.render('create', {
    id: req.body.id,
    item: req.body.item
})
  const result = createdProduct.save();

  res.json(result);
});

exports.createProduct = createProduct;

//'mongodb+srv://alex:rQDyfrrM8xDVArV@cluste.1zvnk.mongodb.net/test?retryWrites=true&w=majority'
