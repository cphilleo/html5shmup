var Sprite = function(image, width, height) {
	//public vars
	
	//private vars
	var _image = image;
	var _width = width;
	var _height = height;
	var _animations = [];
	var _isPlaying = true;
	var _currentAnimation = null;
	
	//public methods
	this.addAnimation = function(animation) {
		_animations[animation.getName()] = animation;
	}
	
	this.update = function(delta) {
		if (_isPlaying ) {
			_currentAnimation.update(delta);
		}
	}
	
	this.playAnimation = function(name) {
		_currentAnimation = _animations[name];
		_currentAnimation.reset();
		_isPlaying = true;
	}
	
	this.stopAnimation = function() {
		_isPlaying = false;
	}
	
	this.getCurrentAnimation = function() {
		return _currentAnimation;
	}
	
	this.draw = function(x, y) {
		var frame = _currentAnimation.getCurrentFrame();
		var frameX = _width * frame;
		var frameY = 0;
	
		ctx.drawImage(_image, frameX, frameY, _width, _height, x, y, _width, _height);
	}
	
	this.drawRotated = function(x, y, rot) {
		var frame = _currentAnimation.getCurrentFrame();
		var frameX = _width * frame;
		var frameY = 0;
		
		ctx.save();
			ctx.translate(x + (_width / 2), y + (_height / 2));
			ctx.rotate(rot);
			ctx.drawImage(_image, frameX, frameY, _width, _height, _width / -2, _height / -2, _width, _height);
		ctx.restore();
	}
	
	//Private methods
	
	//Init
	this.addAnimation(new Animation("default", 1, [0], true));
	this.playAnimation("default");
}
