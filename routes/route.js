const express = require('express');
const router = express.Router();
const categorieDB = require('../model/categories')
const itemDB = require('../model/items');



// rendering homepage

router.get('/',(req,res)=>{

    res.render('homepage');
})

//rendering categories
router.get('/categories',async (req,res)=>{

    const categorieData =  await categorieDB.find()
    
    res.render('categories',{cat:categorieData});
    
})

//rendering items
router.get('/items',async(req,res)=>{

  const itemsData =  await itemDB.find()
  const categorieData =  await categorieDB.find()
  
  res.render('items',{allCategories:categorieData,allItems:itemsData});
})


// Creating data in categorie collection from user in database
router.post("/add/categorie",async (req,res)=>{

    const categorieData = req.body
    categorieData.numberOfItems = 0;
    console.log(categorieData);

    const data = new categorieDB(categorieData);
    await data.save()
    .then(() => {
      console.log("categorie data stored successfully");
      res.redirect("/categories");
    })
    .catch(() => {
      console.log("categorie data does not stored");
    });
   
})

// Creating data in items collection from user in database
router.post("/add/item", async(req,res)=>{
   const itemData = req.body
    console.log(itemData);

    const data = new itemDB(itemData);
    await data.save()
    .then(() => {
      console.log(" items data stored successfully");
      res.redirect('/items')
    })
    .catch(() => {
      console.log("items data does not stored");
    });
   
})

module.exports = router;