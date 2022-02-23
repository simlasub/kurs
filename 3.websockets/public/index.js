var ws;

function ws_connect(){
	ws = new WebSocket("ws://" + location.hostname + ":1234");
	ws.onopen = function(){
		console.log("connected");
		ws.onmessage = ws_onmessage;
	}
}

function ws_onmessage(res){
	let msg = res.data;

	document.getElementById("response").innerHTML = msg;
	console.log(msg);
}

function ws_disconnect(){
	ws.close();
}

function send_OnClick(){
	let msg = document.getElementById("msg").value;
	ws.send(msg);
}


