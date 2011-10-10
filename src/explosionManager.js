var ExplosionManager = function() {
	this.explosions = [];
}

ExplosionManager.prototype.addExplosion = function(x, y) {
	this.explosions.push(new Explosion(x, y));
}

ExplosionManager.prototype.update = function(delta) {
	for (var i in this.explosions) {
		var explosion = this.explosions[i];
		
		explosion.update(delta);
		
		if (!explosion.alive) {
			this.explosions.splice(i, 1);
		}
	}
}

ExplosionManager.prototype.render = function() {
	for (var i in this.explosions) {
		var explosion = this.explosions[i];
		
		explosion.render();
	}
}