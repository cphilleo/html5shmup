var Point = function (x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.translate = function(vector) {
	this.x += vector.x;
	this.y += vector.y;
}

var Vector = function(x, y) {
	this.x = x;
	this.y = y;
}

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