var Ship = function() {
	//public vars
	
	//private vars
	var _x = (640 /2) - 20;
	var _y = 480 - 50;
	var _width = 39;
	var _height = 43;
	var _speed = 250;
	var _shotTimer = 0;
	var _state = "forward";
	var _sprite = new Sprite(images[2], _width, _height);
	
	//public methods
	this.render = function() {
		_sprite.draw(_x, _y);
		
		if (g_debug) {
			//draw bounding box
			var box = getBoundingBox();
			
			ctx.strokeStyle = makeRGB(255, 0, 0);
			ctx.strokeRect(box.x, box.y, box.width, box.height);
		}
	}
	
	this.update = function(delta) {
		_sprite.update(delta);
		_shotTimer -= delta;
		
		//collisions
		var box = getBoundingBox();
		
		if (asteroidManager.checkCollision(box.x, box.y, box.x + box.width, box.y + box.height)) {
			g_explosionManager.addExplosion(_x, _y);
			g_score = 0;
			_x = (640 / 2) - 20;
			_y = 480 - 50;
		}
		
		//handle input
		if (KEY_LEFT in keysDown) {
			if (_x > 0) {
				_x -= _speed * delta;
			}
			
			if (_state === "forward") {
				_sprite.playAnimation("left");
				_state = "left";
			}
		}
		
		else {
			if (_state === "left") {
				_sprite.playAnimation("forward");
				_state = "forward";
			}
		}
		
		if (KEY_RIGHT in keysDown) {
			if (_x + 39 < 640) {
				_x += _speed * delta;
			}
			
			if (_state === "forward") {
				_sprite.playAnimation("right");
				_state = "right";
			}
		}
		
		else {
			if (_state === "right") {
				_sprite.playAnimation("forward");
				_state = "forward"
			}
		}	
		
		if (KEY_UP in keysDown) {
			if (_y > 0) {
				_y -= _speed * delta;
			}
		}
		
		if (KEY_DOWN in keysDown) {
			if (_y + 36 < 480) {
				_y += _speed * delta;
			}
		}
		
		if (KEY_SPACE in keysDown) {
			if (_shotTimer <= 0) {
				_shotTimer = 0.25;
				bulletManager.addBullet(_x + 7, _y + 9);
				bulletManager.addBullet(_x + 28, _y + 9);
			}
		}
	}
	
	//private methods
	var getBoundingBox = function() {
		var scale = 0.25;
		var scaleX = _width * scale;
		var scaleY = _height * scale;
		return new Rect(_x + scaleX, _y + scaleY, _width - scaleX * 2, _height - scaleY * 2);
	}
	
	//Initialization
	_sprite.addAnimation({name: "forward", speed: 0.1, frames: [1,2], loop: true});
	_sprite.addAnimation({name: "left", speed: 0.1, frames: [4,5], loop: true});
	_sprite.addAnimation({name: "right", speed: 0.1, frames: [7,8], loop: true});
	_sprite.playAnimation("forward");
}
