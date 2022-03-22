#!/bin/nodejs

// import dependencies
var express = require("express");
var WebSocket = require("ws");

// create servers
var app = express(); 
var wss = new WebSocket.Server({port: 1234}, ()=>{
	console.log("websocket server started on ws://localhost:1234");
});

// setup webserver
app.use(express.static(__dirname + "/public"));
console.log("public folder set to: " + __dirname + "/public");
app.listen(8080, ()=>{
	console.log("webserver started on http://localhost:8080");
});

// setup websocketserver
var lastMessage = "";

wss.on("connection", function connection(ws) {
    console.log("Client connected");
 
	//ws.send(lastMessage);

    ws.on("message", function incoming(data) {
        console.log("New Message: " + data);
		
		// broadcast message
		wss.clients.forEach((client)=>{
			if(client.readyState === WebSocket.OPEN) {
				client.send(data);
				lastMessage = data;
			  }
		});
    });

    ws.on("close", function close() {
        console.log("Client closed connection");
    });
 
});


