var Animation = function(name, speed, frames, loop) {
	//publc vars
	
	//private vars
	var _name = name;
	var _speed = speed;
	var _speedCounter = 0;
	var _loop = loop || false;
	var _frames = frames;
	var _frameCounter = 0;
	
	//public methods
	this.update = function(delta) {
		_speedCounter += delta;
		
		if (_speedCounter > _speed) {
			if (_frameCounter < _frames.length - 1) {
				_frameCounter++;
			}
			else {
				if (_loop) {
					_frameCounter = 0;
				}
			}
			
			_speedCounter = 0;
		}
	}

	this.getCurrentFrame = function() {
		return _frames[_frameCounter];
	}

	this.reset = function() {
		_frameCounter = _speedCounter = 0;
	}
	
	this.hasEnded = function() {
		return _frameCounter === _frames.length - 1;
	}
	
	//private methods
	
	//Initialization
}
