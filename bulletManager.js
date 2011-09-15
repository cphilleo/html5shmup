var bulletManager = {
	bullets: [],
	speed: 400,
	addBullet: function(x, y) {
		this.bullets[this.bullets.length] = {x: x, y: y};
	},
	update: function(delta) {
		for (var i = 0; i < this.bullets.length; i++) {
			var bullet = this.bullets[i];
			bullet.y -= this.speed * delta;
			if (bullet.y < 0) {
				this.bullets.splice(i, 1);
			}
			var madeHit = asteroidManager.checkCollision(bullet.x, bullet.y, bullet.x + 3, bullet.y + 9);
			
			if (madeHit) {
				this.bullets.splice(i, 1);
			}
		}
	},
	render: function() {
		for (var i = 0; i < this.bullets.length; i++) {
			var bullet = this.bullets[i];
			ctx.drawImage(images[0], 4, 131, 3, 9, bullet.x, bullet.y, 3, 9);
		}
	}
}