var Animation = function(name, speed, frames, loop) {
	this.name = name;
	this.speed = speed;
	this.speedCounter = 0;
	this.loop = loop || false;
	this.frames = frames;
	this.frameCounter = 0;
}

Animation.prototype.update = function(delta) {
	this.speedCounter += delta;
	
	if (this.speedCounter > this.speed) {
		if (this.frameCounter < this.frames.length - 1) {
			this.frameCounter++;
		}
		else {
			if (this.loop) {
				this.frameCounter = 0;
			}
		}
		
		this.speedCounter = 0;
	}
}

Animation.prototype.getCurrentFrame = function() {
	return this.frames[this.frameCounter];
}

Animation.prototype.reset = function() {
	this.frameCounter = this.speedCounter = 0;
}

Animation.prototype.hasEnded = function() {
	return this.frameCounter === this.frames.length - 1;
}