var ship = {
	x: (640 /2) - 20,
	y: 480 - 50,
	speed: 250,
	shotTimer: 0,
	render: function() {
		ctx.drawImage(images[0], 39, 0, 39, 36, this.x, this.y, 39, 36);
	},
	update: function(delta) {
		this.shotTimer -= 100 * delta;
		
		if (KEY_LEFT in keysDown) {
			if (this.x > 0) {
				this.x -= this.speed * delta;
			}
		}
		
		if (KEY_RIGHT in keysDown) {
			if (this.x + 39 < 640) {
				this.x += this.speed * delta;
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
}