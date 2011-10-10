/* Point */
var Point = function (x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.translate = function(vector) {
	this.x += vector.x;
	this.y += vector.y;
}

/* Vector */
var Vector = function(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.mul = function(scaler) {
	var scaleX = this.x * scaler;
	var scaleY = this.y * scaler;
	return new Vector(scaleX, scaleY);
}

/* Rect */
var Rect = function(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

Rect.prototype.translate = function(vector) {
	this.x += vector.x;
	this.y += vector.y;
}