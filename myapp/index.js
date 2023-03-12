const express = require('express');
const path = require('path')
const hbs = require('hbs');

const app = express()
//rel abs
//console.log(path.join(__dirname, '../public'))
const staticPath = path.join(__dirname, "./public");
app.use(express.static(staticPath));
//to set the view engine
app.set('view engine','hbs');
//buit in middle ware
//app.use(express.static(staticPath));
app.get("",(req,res)=>{
    res.render('index');
});
app.get("/",(req,res)=>{
    res.send("hello from the express");
});

app.get("/about",(req,res)=>{
    res.send("Or Londe kaam kiya?");
});

app.listen(8000,()=>{
    console.log("listening the port at 8000")
})