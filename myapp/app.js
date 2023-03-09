const express = require('express');
const app = express()
app.get("/",(req,res)=>{
    res.send("hello from the express");
});

app.get("/about",(req,res)=>{
    res.send("Or Londe kaam kiya?");
});

app.listen(8000,()=>{
    console.log("listening the port at 8000")
})