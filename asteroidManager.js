var asteroidManager = {
	asteroids: [],
	minSpeed: 50,
	maxSpeed: 200,
	minRotation: 0.2,
	maxRotation: 2,
	newAsteroidTimer: Math.random() * 200,
	addAsteroid: function() {
		var x = (Math.random() * canvas.width) - 55;
		var y = -53;
		var speed = (Math.random() * (this.maxSpeed - this.minSpeed)) + this.minSpeed;
		var rot = Math.random() * (2 * Math.PI);
		var rotSpeed = (Math.random() * (this.maxRotation - this.minRotation)) + this.minRotation;
		
		var asteroid = new Asteroid(x, y, rot, speed, rotSpeed);
		
		this.asteroids.push(asteroid);
	},
	checkCollision: function(x1, y1, x2, y2) {
		for (var i = 0; i < this.asteroids.length; i++) {
			var asteroid = this.asteroids[i];
			
			var minX = asteroid.x;// - asteroid.width / 2;
			var maxX = asteroid.x + asteroid.width;// / 2;
			var minY = asteroid.y;// - asteroid.height / 2;
			var maxY = asteroid.y + asteroid.height;// / 2;
			
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
			
			asteroid.update(delta);
			
			if (asteroid.remove) {
				this.asteroids.splice(i,1);
			}
		}
	},
	render: function() {
		for (var i = 0; i < this.asteroids.length; i++) {
			var asteroid = this.asteroids[i];
			
			asteroid.render();
		}
	}
}
		