const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema({
  categorieName: String,
  numberOfItems: Number,
});

module.exports = mongoose.model("categorie", categorieSchema);
