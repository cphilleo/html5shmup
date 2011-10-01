var asteroidManager = {
	asteroids: [],
	minSpeed: 50,
	maxSpeed: 200,
	minRotation: 0.2,
	maxRotation: 2,
	newAsteroidTimer: Math.random() * 200,
	addAsteroid: function() {
		var pos = new Point(Random.nextInt(0, canvas.width - 55), -53);
		var velocity = new Vector(0, Random.nextFloat(this.minSpeed, this.maxSpeed));
		var rot = Random.nextFloat(2 * Math.PI);
		var rotSpeed = Random.nextFloat(this.minRotation, this.maxRotation);
		
		var asteroid = new Asteroid(pos, velocity, rot, rotSpeed);
		
		this.asteroids.push(asteroid);
	},
	checkCollision: function(x1, y1, x2, y2) {
		for (var i = 0; i < this.asteroids.length; i++) {
			var asteroid = this.asteroids[i];
			
			var testRect = new Rect(x1, y1, x2 - x1, y2 - y1);
			var asteroidRect = asteroid.getBoundingBox();
			
			if (BoundingBox.checkCollision(testRect, asteroidRect)) {
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
			
			if (!asteroid.alive) {
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
		