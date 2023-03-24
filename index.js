const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/route");

mongoose.connect("mongodb://127.0.0.1:27017/inventoryData")
  .then(() => {
    console.log("database connection done");
  })
  .catch(() => {
    console.log("database does not connect");
  });

app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use(router);

app.listen(5000, () => {
  console.log("port 5000 is running");
});
