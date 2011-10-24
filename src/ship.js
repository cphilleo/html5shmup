var Ship = function() {
	this.x = (640 /2) - 20;
	this.y = 480 - 50;
	this.speed = 250;
	this.shotTimer = 0;
	this.state = "forward";
	this.sprite = new Sprite(images[2], 39, 43);
	this.sprite.addAnimation({name: "forward", speed: 0.1, frames: [1,2], loop: true});
	this.sprite.addAnimation({name: "left", speed: 0.1, frames: [4,5], loop: true});
	this.sprite.addAnimation({name: "right", speed: 0.1, frames: [7,8], loop: true});
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
		
		if (this.state === "forward") {
			this.sprite.playAnimation("left");
			this.state = "left";
		}
	}
	
	else {
		if (this.state === "left") {
			this.sprite.playAnimation("forward");
			this.state = "forward";
		}
	}
	
	if (KEY_RIGHT in keysDown) {
		if (this.x + 39 < 640) {
			this.x += this.speed * delta;
		}
		
		if (this.state === "forward") {
			this.sprite.playAnimation("right");
			this.state = "right";
		}
	}
	
	else {
		if (this.state === "right") {
			this.sprite.playAnimation("forward");
			this.state = "forward"
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
