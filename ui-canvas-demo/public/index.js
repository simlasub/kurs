// global variable
const dim = [1920,1080];
const colors = ["#e88300", "#e80000"];
const lineWidth = 2;
const fontSize = 25;
const font = fontSize + "px sans-serif";

var pixelPerDegree = 20;

var b,vh; // for canvas elements

var roll = pitch = heading = 0;
var xSpeed = ySpeed = zSpeed = 0;
var depth = 0;
var mode = "disarmed";
var armed = false;
var battery = 10;
var maxBattery = 14;
var minBattery = 6;
var resBattery = 8;
var lastError = "NO ERROR";

// this function is called after everything is loaded
function onStart(){
	// get canvas elements from html
	b = document.getElementById("background").getContext("2d");
	vh = document.getElementById("virtualHorizon").getContext("2d");

	window.addEventListener('resize', onResize);
	onResize();

	// render background
	renderBackground();

	// render virtual Horizon
	initializeVirtualHorizon();
	renderVirtualHorizon();

	// start Animation
	startAnimation();
}

// called on a window resize
function onResize(){
	console.log("window resized");

	// get window resolution
	dim[0] = window.innerWidth;
	dim[1] = window.innerHeight;
	
	// get canvas elements
	var background = document.getElementById("background");
	var virtualHorizon = document.getElementById("virtualHorizon");

	// update canvas resolution
	background.width = dim[0];
	virtualHorizon.height = dim[1];
	background.width = dim[0];
	virtualHorizon.height = dim[1];

	// redraw canvas
	renderBackground();
	initializeVirtualHorizon();
	renderVirtualHorizon();
}
