const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  categorie: String,
});

module.exports = mongoose.model("items", itemSchema);
