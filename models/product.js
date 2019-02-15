const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: String,
  price: String
});

module.exports = mongoose.model('Product', ProductSchema);
