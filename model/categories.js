const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  categorieName: String,
  numberOfItems: Number,
});

module.exports = mongoose.model("categories", categoriesSchema);
