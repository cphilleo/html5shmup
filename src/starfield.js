var starfield =
{
	stars: [],
	initialize: function() {
		for(var i = 0; i < 250; i++)
		{
			var speed = ((Math.random() * 205) + 50);
			var color = Math.floor(speed).toString(16);
			
			this.stars[this.stars.length] = {
				x: (Math.random() * 640),
				y: (Math.random() * 480),
				speed: speed,
				color: "#" + color + color + color
			};
		}
	},
	update: function(delta) {
		for (var i = 0; i < this.stars.length; i++) {
			var star = this.stars[i];
			
			star.y += star.speed * delta;
			
			if (star.y >= 480) {
				star.y = 0;
				star.x = (Math.random() * 640);
			}
		}
	},
	render: function() {
		for(var i = 0; i < this.stars.length; i++) {
			var star = this.stars[i];
			ctx.fillStyle = star.color;
			var size = 1;
			
			if (star.speed > 100) {
				size = 2;
			}
			
			if (star.speed > 200) {
				size = 3;
			}
			
			ctx.fillRect(star.x, star.y, size, size);
		}
	}
}
