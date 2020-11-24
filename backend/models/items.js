const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    item: { type: String, required: true },
    complete: { type: Boolean, required: false }
});

module.exports = mongoose.model('item', productSchema);