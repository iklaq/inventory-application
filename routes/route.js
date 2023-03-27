const express = require("express");
const categorieDB = require("../model/categories");
const itemDB = require("../model/items");
const router = express.Router();

// rendering homepage
router.get("/", (req, res) => {
  res.render("homepage");
});

//rendering categories
router.get("/categories", async (req, res) => {
  const categorieData = await categorieDB.find();
  res.render("categories", { categories: categorieData });
});

//rendering items
router.get("/items", async (req, res) => {
  const itemsData = await itemDB.find();
  const categorieData = await categorieDB.find();

  res.render("items", { allCategories: categorieData, allItems: itemsData });
});

// Creating data in categorie collection from user in database
router.post("/categorie", async (req, res) => {
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
router.post("/item", async (req, res) => {
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

// delete a item
router.get("/delete-item/:_id", async (req, res) => {
  const { _id } = req.params;

  await itemDB.deleteOne({ _id });
  try {
    res.redirect("/items");
  } catch (error) {
    console.log(error);
  }
});

//delete a categorie

router.get("/delete-categorie/:_id", async (req, res) => {
  const { _id } = req.params;
  const data = await categorieDB.find({_id});
 

  await categorieDB.deleteOne({ _id });
  try {
    res.redirect("/categories");
  } catch (error) {
    console.log(error);
  }
});



module.exports = router;
