var Animation = function(name, speed, loop) {
	this.name = name;
	this.speed = 1 / speed;
	this.speedCounter = 0;
	this.loop = loop;
	this.frames = [];
	this.currentFrame = 0;
}

Animation.prototype.addFrame = function(frame) {
	this.frames[this.frames.length] = frame;
}

Animation.prototype.update = function(delta) {
	this.speedCounter += delta;
	
	if (this.speedCounter > this.speed) {
		if (this.currentFrame < this.frames.length - 1) {
			this.currentFrame++;
		}
		else {
			this.currentFrame = 0;
		}
		
		this.speedCounter = 0;
	}
}

Animation.prototype.render = function(x, y) {
	var frame = this.frames[this.currentFrame];
	
	ctx.drawImage(frame.image, frame.x, frame.y, frame.w, frame.h, x, y, frame.w, frame.h);
}