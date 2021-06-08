var express = require("express");
var Products = require("./product.json");
var app = express();

app.get("/product/listall", (req, res, next) => {
    res.json(Products);
});

app.get("/product/:id", (req, res, next) => {
    console
    res.json(Products.find((product) => {
        return +req.params.id == product.id
    }))
});

app.listen(3100, () => {
 console.log("Server running on port 3100");
});