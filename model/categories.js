const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  name: String,
  numberOfItems: Number,
});

module.exports = mongoose.model("categories", categoriesSchema);
