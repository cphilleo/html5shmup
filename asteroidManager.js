var asteroidManager = {
	asteroids: [],
	minSpeed: 50,
	maxSpeed: 200,
	minRotation: 0.2,
	maxRotation: 2,
	newAsteroidTimer: Math.random() * 200,
	addAsteroid: function() {
		if (this.newAsteroidTimer < 0) {
			this.newAsteroidTimer = Math.random() * 200;
			
			this.asteroids[this.asteroids.length] = {
				x: (Math.random() * 640) - 55,
				y: -53,
				speed: (Math.random() * (this.maxSpeed - this.minSpeed)) + this.minSpeed,
				rotation: Math.random() * (2 * Math.PI),
				rotationSpeed: (Math.random() * (this.maxRotation - this.minRotation)) + this.minRotation,
				width: 55,
				height: 53
			};
		}
	},
	checkCollision: function(x1, y1, x2, y2) {
		for (var i = 0; i < this.asteroids.length; i++) {
			var asteroid = this.asteroids[i];
			
			var minX = asteroid.x - asteroid.width / 2;
			var maxX = asteroid.x + asteroid.width / 2;
			var minY = asteroid.y - asteroid.height / 2;
			var maxY = asteroid.y + asteroid.height / 2;
			
			//if ((x1 >= asteroid.x && x1 <= asteroid.x + 55 && y1 >= asteroid.y && y1 <= asteroid.y + 53) ||
			//		(x2 >= asteroid.x && x2 <= asteroid.x + 55 && y2 >= asteroid.y && y2 <= asteroid.y + 53))
			if ((x1 < maxX) && (x2 > minX) && (y1 < maxY) && (y2 > minY)) {
				this.asteroids.splice(i, 1);
				g_score += 100;
				return true;
			}
		}
		
		return false;
	},
	update: function(delta) {
		this.newAsteroidTimer -= 100 * delta;
		
		if (this.newAsteroidTimer < 0) {
			this.addAsteroid();
			this.newAsteroidTimer = Math.random() * 200;
		}
		
		for (var i = 0; i < this.asteroids.length; i++) {
			var asteroid = this.asteroids[i];
			
			asteroid.y += asteroid.speed * delta;
			
			if (asteroid.y > 480) {
				this.asteroids.splice(i, 1);
			}
			
			asteroid.rotation += asteroid.rotationSpeed * delta;
			
			if (asteroid.rotation > (2 * Math.PI)) {
				asteroid.rotation = 0;
			}
		}
	},
	render: function() {
		for (var i = 0; i < this.asteroids.length; i++) {
			var asteroid = this.asteroids[i];
			ctx.save();
				ctx.translate(asteroid.x, asteroid.y);
				ctx.rotate(asteroid.rotation);
				ctx.drawImage(images[0], 0, 243, 55, 53, -28, -27, 55, 53);
			ctx.restore();
			
			var minX = asteroid.x - asteroid.width / 2;
			var maxX = asteroid.x + asteroid.width / 2;
			var minY = asteroid.y - asteroid.height / 2;
			var maxY = asteroid.y + asteroid.height / 2;
			
			ctx.beginPath();
				ctx.moveTo(minX, minY);
				ctx.lineTo(maxX, minY);
				ctx.lineTo(maxX, maxY);
				ctx.lineTo(minX, maxY);
				ctx.lineTo(minX, minY);
				
				ctx.strokeStyle = 'rgb(255,0,0)';
				ctx.stroke();
			ctx.closePath();
		}
	}
}
		