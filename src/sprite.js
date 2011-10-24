var Sprite = function(image, width, height) {
	//public vars
	
	//private vars
	var _image = image;
	var _width = width;
	var _height = height;
	var _animations = [];
	var _isPlaying = true;
	var _currentAnimation = null;
	var _speedCounter = 0;
	var _frameCounter = 0;
	
	//public methods
	this.addAnimation = function(animation) {
		_animations[animation.name] = animation;
	}
	
	this.update = function(delta) {
		if (_isPlaying ) {
			
			_speedCounter += delta;
		
			if (_speedCounter > _currentAnimation.speed) {
				if (_frameCounter < _currentAnimation.frames.length - 1) {
					_frameCounter++;
				}
				else {
					if (_currentAnimation.loop) {
						_frameCounter = 0;
					}
				}
				
				_speedCounter = 0;
			}
		}
	}
	
	this.playAnimation = function(name) {
		_currentAnimation = _animations[name];
		this.resetAnimation();
		_isPlaying = true;
	}
	
	this.stopAnimation = function() {
		_isPlaying = false;
	}
	
	this.resetAnimation = function() {
		_frameCounter = _speedCounter = 0;
	}
	
	this.hasAnimationEnded = function() {
		return _frameCounter === _currentAnimation.frames.length - 1;
	}
	
	this.draw = function(x, y) {
		var frame = _currentAnimation.frames[_frameCounter];
		var frameX = _width * frame;
		var frameY = 0;
	
		ctx.drawImage(_image, frameX, frameY, _width, _height, x, y, _width, _height);
	}
	
	this.drawRotated = function(x, y, rot) {
		var frame = _currentAnimation.frames[_frameCounter];
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
	this.addAnimation({name: "default", speed: 1, frames: [0], loop: true});
	this.playAnimation("default");
}
