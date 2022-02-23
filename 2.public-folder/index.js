#!/bin/nodejs

// import dependencies
var express = require("express");

var app = express(); // create express app

// use the public folder
app.use(express.static(__dirname + "/public"));
console.log("public folder set to: " + __dirname + "/public");
app.listen(8080, ()=>{
	console.log("webserver started on http://localhost:8080");
});



