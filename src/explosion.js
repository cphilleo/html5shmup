var Explosion = function(x, y) {
	this.x = x;
	this.y = y;
	this.alive = true;
	this.sprite = new Sprite(images[1], 53, 49);
	this.sprite.addAnimation({name: "exploding", speed: 0.04, frames: range(0,5), loop: false});
	this.sprite.playAnimation("exploding");
}

Explosion.prototype.update = function(delta) {
	this.sprite.update(delta);
	
	if (this.sprite.hasAnimationEnded()) {
		this.alive = false;
	}
}

Explosion.prototype.render = function() {
	this.sprite.draw(this.x, this.y);
}