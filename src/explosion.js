var Explosion = function(x, y) {
	this.x = x;
	this.y = y;
	this.alive = true;
	this.sprite = new Sprite(images[1], 53, 49);
	this.sprite.addAnimation(new Animation("exploding", 0.08, range(0,5), false));
	this.sprite.playAnimation("exploding");
}

Explosion.prototype.update = function(delta) {
	this.sprite.update(delta);
	
	if (this.sprite.currentAnimation.hasEnded()) {
		this.alive = false;
	}
}

Explosion.prototype.render = function() {
	this.sprite.draw(this.x, this.y);
}