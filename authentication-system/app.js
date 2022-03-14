const express = require('express');
require('dotenv').config()

const app = express();


app.get('/', (req, res) => {
    res.send("<h1> Hellow from LCO</h1>")
})

app.get("/abir", (req, res) => {
    res.json({
        message : "Hi Abir Pal from LCO",
        method : req.method
    })
})



module.exports = app;