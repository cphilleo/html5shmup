//Globals
var g_SpritesheetManager = new SpritesheetManager();

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

var imageFiles = ['spaceshipsprites.gif', 'explosion.gif'];
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
	g_SpritesheetManager.addSheet('explosion', new Spritesheet(images[1], 0, 0, 53, 49));
}

var update = function(modifier) {
	starfield.update(modifier);
	ship.update(modifier);
	bulletManager.update(modifier);
	asteroidManager.update(modifier);
	//explosion.update(modifier);
}

var clear = function() {
	ctx.fillStyle = "#000";
	ctx.fillRect(0,0,640,480);
}

var render = function() {
	starfield.render();
	ship.render();
	bulletManager.render();
	asteroidManager.render();
	
	//score
	ctx.fillStyle = "rgb(250,250,250)";
	ctx.font = "24px Arial";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Score: " + g_score, 5,5);
	
	g_SpritesheetManager.getSheet('explosion').drawFrame(3, 100, 100);
}

loadImages();

function startGame() {
	setup();
	g_then = Date.now();
	setInterval(main, 1);
}

var g_then;
var g_score = 0;

function main() {
	var now = Date.now();
	var delta = now - g_then;
	
	update(delta / 1000);
	clear();
	render();
	
	g_then = now;
};
