const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemName: String,
  itemPrice: Number,
  itemCategorie: String,
});

module.exports = mongoose.model("items", itemSchema);
