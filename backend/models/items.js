const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: String, required: true },
    item: { type: String, required: true }
});

module.exports = mongoose.model('item', productSchema);