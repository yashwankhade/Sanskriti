const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = new express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/',(req,res)=>{
  res.render("home",{});
})

app.listen(5000,()=>{
  console.log("Hello");
})
