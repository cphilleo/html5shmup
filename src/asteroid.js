var Asteroid = function(pos, velocity, rot, rotSpeed) {
	this.pos = pos;
	this.velocity = velocity;
	this.rot = rot;
	this.rotSpeed = rotSpeed;
	this.width = 55;
	this.height = 53;
	this.alive = true;
}

Asteroid.prototype.update = function(delta) {
	this.pos.translate(this.velocity.mul(delta));
	
	if (this.pos.y > canvas.height) {
		this.alive = false;
	}
	
	this.rot += this.rotSpeed * delta;
	
	if (this.rot > (2 * Math.PI)) {
		this.rot = 0;
	}
}

Asteroid.prototype.render = function() {
	ctx.save();
		ctx.translate(this.pos.x + (this.width / 2), this.pos.y + (this.height / 2));
		ctx.rotate(this.rot);
		ctx.drawImage(images[0], 0, 243, 55, 53, -28, -27, 55, 53);
	ctx.restore();
	
	if (g_debug) {
		var box = this.getBoundingBox();
		
		ctx.strokeStyle = makeRGB(255, 0, 0);
		ctx.strokeRect(box.x, box.y, box.width, box.height);
	}
}

Asteroid.prototype.getBoundingBox = function() {
	var scale = 0.1;
	var scaleX = this.width * scale;
	var scaleY = this.height * scale;
	return new Rect(this.pos.x + scaleX, this.pos.y + scaleY, this.width - scaleX * 2, this.height - scaleY * 2);
}