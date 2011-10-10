var Sprite = function(image, width, height) {
	this.image = image;
	this.width = width;
	this.height = height;
	this.animations = [];
	this.isPlaying = true;
	
	this.addAnimation(new Animation("default", 1, [0], true));
	this.playAnimation("default");
}

Sprite.prototype.addAnimation = function(animation) {
	this.animations[animation.name] = animation;
}

Sprite.prototype.update = function(delta) {
	if (this.isPlaying ) {
		this.currentAnimation.update(delta);
	}
}

Sprite.prototype.playAnimation = function(name) {
	this.currentAnimation = this.animations[name];
	this.currentAnimation.reset();
	this.isPlaying = true;
}

Sprite.prototype.stopAnimation = function() {
	this.isPlaying = false;
}

Sprite.prototype.draw = function(x, y) {
	var frame = this.currentAnimation.getCurrentFrame();
	var frameX = this.width * frame;
	var frameY = 0;
	
	ctx.drawImage(this.image, frameX, frameY, this.width, this.height, x, y, this.width, this.height);
}

Sprite.prototype.drawRotated = function(x, y, rot) {
	var frame = this.currentAnimation.getCurrentFrame();
	var frameX = this.width * frame;
	var frameY = 0;
	
	ctx.save();
		ctx.translate(this.pos.x + (this.width / 2), this.pos.y + (this.height / 2));
		ctx.rotate(this.rot);
		ctx.drawImage(this.image, frameX, frameY, this.width, this.height, this.width / -2, this.height / -2, this.width, this.height);
	ctx.restore();
}