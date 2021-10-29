const mongoose = require("mongoose");

const producrSchema = new mongoose.Schema({
  skuId: {
    type: String,
  },
  name: {
    type: String,
  },
  cost: {
    type: Number,
  },
  quantity: {
    type: Number,
  }
});

const Product = mongoose.model("Products", producrSchema);
module.exports = Product;