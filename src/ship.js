var Ship = function() {
	this.x = (640 /2) - 20;
	this.y = 480 - 50;
	this.speed = 250;
	this.shotTimer = 0;
	this.sprite = new Sprite(images[2], 39, 43);
	this.sprite.addAnimation(new Animation("forward", 0.1, [1,2], true));
	this.sprite.addAnimation(new Animation("left", 0.1, [4,5], true));
	this.sprite.addAnimation(new Animation("right", 0.1, [7,8], true));
	this.sprite.playAnimation("forward");
}

Ship.prototype.render = function() {
	this.sprite.draw(this.x, this.y);
}

Ship.prototype.update = function(delta) {
	this.sprite.update(delta);
	this.shotTimer -= 100 * delta;
	
	if (KEY_LEFT in keysDown) {
		if (this.x > 0) {
			this.x -= this.speed * delta;
		}
		
		if (this.sprite.getCurrentAnimation().name === "forward") {
			this.sprite.playAnimation("left");
		}
	}
	
	else {
		if (this.sprite.getCurrentAnimation().name === "left") {
			this.sprite.playAnimation("forward");
		}
	}
	
	if (KEY_RIGHT in keysDown) {
		if (this.x + 39 < 640) {
			this.x += this.speed * delta;
		}
		
		if (this.sprite.getCurrentAnimation().name === "forward") {
			this.sprite.playAnimation("right");
		}
	}
	
	else {
		if (this.sprite.getCurrentAnimation().name === "right") {
			this.sprite.playAnimation("forward");
		}
	}	
	
	if (KEY_UP in keysDown) {
		if (this.y > 0) {
			this.y -= this.speed * delta;
		}
	}
	
	if (KEY_DOWN in keysDown) {
		if (this.y + 36 < 480) {
			this.y += this.speed * delta;
		}
	}
	
	if (KEY_SPACE in keysDown) {
		if (this.shotTimer <= 0) {
			this.shotTimer = 25;
			bulletManager.addBullet(this.x + 7, this.y + 9);
			bulletManager.addBullet(this.x + 28, this.y + 9);
		}
	}
}
