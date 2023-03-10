const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res)=> {
    res.send("welcome to my homepage");
});

app.get('/about', (req,res)=> {
    res.send("welcome to my about page");
});

app.get('/contact', (req,res)=> {
    res.send("welcome to my about page");
});

app.get('/temp', (req,res)=> {
    res.send("welcome to my temp page");
});


app.listen(port,()=>{
    console.log(`listening to the port no ${port}`)
});