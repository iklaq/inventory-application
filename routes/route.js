const categorieDB = require("../model/categories");
const express = require("express");
const itemDB = require("../model/items");
const router = express.Router();

// rendering homepage
router.get("/", (req, res) => {
  res.render("homepage");
});

//rendering categories
router.get("/categories", async (req, res) => {
  const categorieData = await categorieDB.find();
  res.render("categories", { cat: categorieData });
});

//rendering items
router.get("/items", async (req, res) => {
  const itemsData = await itemDB.find();
  const categorieData = await categorieDB.find();

  res.render("items", { allCategories: categorieData, allItems: itemsData });
});

// Creating data in categorie collection from user in database
router.post("/add/categorie", async (req, res) => {
  const categorieData = req.body;
  categorieData.numberOfItems = 0;

  const data = new categorieDB(categorieData);
  await data
    .save()
    .then(() => {
      console.log("categorie data stored successfully");
      res.redirect("/categories");
    })
    .catch(() => {
      console.log("categorie data does not stored");
    });
});

// Creating data in items collection from user in database
router.post("/add/item", async (req, res) => {
  const itemData = req.body;

  const data = new itemDB(itemData);
  await data
    .save()
    .then(() => {
      console.log(" items data stored successfully");
      res.redirect("/items");
    })
    .catch(() => {
      console.log("items data does not stored");
    });
});

module.exports = router;
