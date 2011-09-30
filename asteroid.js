var Asteroid = function(x, y, rot, speed, rotSpeed) {
	this.x = x;
	this.y = y;
	this.rot = rot;
	this.speed = speed;
	this.rotSpeed = rotSpeed;
	this.width = 55;
	this.height = 53;
	this.remove = false;
}

Asteroid.prototype.update = function(delta) {
	this.y += this.speed * delta;
	
	if (this.y > canvas.height) {
		this.remove = true;
	}
	
	this.rot += this.rotSpeed * delta;
	
	if (this.rot > (2 * Math.PI)) {
		this.rot = 0;
	}
}

Asteroid.prototype.render = function() {
	ctx.save();
		ctx.translate(this.x + (this.width / 2), this.y + (this.height / 2));
		ctx.rotate(this.rot);
		ctx.drawImage(images[0], 0, 243, 55, 53, -28, -27, 55, 53);
	ctx.restore();
	
	var minX = this.x;
	var maxX = this.x + this.width;
	var minY = this.y;
	var maxY = this.y + this.height;
	
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