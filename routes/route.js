const express = require('express');
const router = express.Router();
const categorie = require('../model/categories')


// rendering homepage
router.get('/',async (req,res)=>{

    const categorieData =  await categorie.find()
    
    res.render('homepage',{cat:categorieData});
    
})


// adding data in categorie from user in database
router.post("/add/categorie",async (req,res)=>{

    const categorieData = req.body
    console.log(categorieData);

    const data = new categorie(categorieData);
    await data.save()
    .then(() => {
      console.log("data stored successfully");
      res.redirect("/");
    })
    .catch(() => {
      console.log("data does not stored");
    });
   
})

module.exports = router;