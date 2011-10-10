function Spritesheet(image, offsetX, offsetY, frameWidth, frameHeight) {
	this.image = image;
	this.offsetX = offsetX;
	this.offsetY = offsetY;
	this.frameWidth = frameWidth;
	this.frameHeight = frameHeight;
}

Spritesheet.prototype.drawFrame = function(frame, x, y) {
	var frameX = (frame * this.frameWidth) + this.offsetX;
	var frameY = this.offsetY;
	
	ctx.drawImage(this.image, frameX, frameY, this.frameWidth, this.frameHeight, x, y, this.frameWidth, this.frameHeight);
}

function SpritesheetManager() {
	this.sheets = [];
}

SpritesheetManager.prototype.addSheet = function(name, sheet) {
	this.sheets[name] = sheet;
}

SpritesheetManager.prototype.getSheet = function(name) {
	return this.sheets[name];
}