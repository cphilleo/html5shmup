//Globals
g_debug = false;

//Create the canvas
var canvas = document.getElementById('the-canvas');
var ctx = canvas.getContext('2d');
canvas.width = 640;
canvas.height = 480;

//Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function(e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
	delete keysDown[e.keyCode];
}, false);

var KEY_LEFT = 37;
var KEY_RIGHT = 39;
var KEY_UP = 38;
var KEY_DOWN = 40;
var KEY_SPACE = 32;

var imageFiles = ['res/spaceshipsprites.gif', 'res/explosion.gif', 'res/ship.gif'];
var images = [];
var imagesLoaded = 0;

function loadImages() {
	for (var image in imageFiles) {
		images[image] = new Image();
		images[image].src = imageFiles[image];
		images[image].onload = imageLoaded();
	}
}

function imageLoaded() {
	imagesLoaded++;

	if (imagesLoaded >= imageFiles.length) {
		startGame();
	}
}

var setup = function() {
	starfield.initialize();
	g_explosionManager = new ExplosionManager();
	g_ship = new Ship();
}

var update = function(modifier) {
	starfield.update(modifier);
	g_ship.update(modifier);
	bulletManager.update(modifier);
	asteroidManager.update(modifier);
	g_explosionManager.update(modifier);
}

var clear = function() {
	ctx.fillStyle = "#000";
	ctx.fillRect(0,0,640,480);
}

var render = function() {
	starfield.render();
	g_ship.render();
	bulletManager.render();
	asteroidManager.render();
	g_explosionManager.render();
	
	//score
	ctx.fillStyle = "rgb(250,250,250)";
	ctx.font = "24px Arial";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Score: " + g_score, 5,5);
	ctx.textAlign = "left";
	ctx.fillText("FPS: " + g_fps, 5, 25);
}

loadImages();

function startGame() {
	setup();
	g_then = Date.now();
	setInterval(main, 1);
}

var g_then;
var g_score = 0;
var g_frameCounter = 0;
var g_fps = 0;
var g_deltaCounter = 0;

function main() {
	var now = Date.now();
	var delta = now - g_then;
	
	update(delta / 1000);
	clear();
	render();
	
	g_frameCounter++;
	g_deltaCounter += delta;
	
	if (g_deltaCounter >= 1000) {
		g_fps = g_frameCounter;
		g_frameCounter = g_deltaCounter = 0;
	}
	
	g_then = now;
};
