#!/bin/nodejs

// import dependencies
var express = require("express");

// create express app
var app = express();

// create simple server
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(8080, () => {
  console.log("Example app listening at http://localhost:8080");
});



