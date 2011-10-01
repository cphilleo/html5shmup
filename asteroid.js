var Asteroid = function(pos, rot, speed, rotSpeed) {
	this.pos = pos;
	this.rot = rot;
	this.speed = speed;
	this.rotSpeed = rotSpeed;
	this.width = 55;
	this.height = 53;
	this.remove = false;
}

Asteroid.prototype.update = function(delta) {
	this.pos.y += this.speed * delta;
	
	if (this.pos.y > canvas.height) {
		this.remove = true;
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
	
	var minX = this.pos.x;
	var maxX = this.pos.x + this.width;
	var minY = this.pos.y;
	var maxY = this.pos.y + this.height;
	
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

Asteroid.prototype.getBoundingBox = function() {
	return new Rect(this.pos.x, this.pos.y, this.width, this.height);
}