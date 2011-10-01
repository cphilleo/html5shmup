var Random = {
	nextInt: function() {
		if (arguments.length == 1) {
			var max = arguments[0];
			return Math.floor(Math.random() * (max + 1));
		}
		
		else if (arguments.length == 2) {
			var min = arguments[0];
			var max = arguments[1];
			return Math.floor((Math.random() * (max + 1 - min)) + min);
		}
		
		else {
			alert("Error: Random.nextInt() invalid arguments");
		}
	},
	
	nextFloat: function() {
		if (arguments.length == 0) {
			return Math.random();
		}
	
		else if (arguments.length == 1) {
			var max = arguments[0];
			return Math.random() * max;
		}
		
		else if (arguments.length == 2) {
			var min = arguments[0];
			var max = arguments[1];
			return Math.random() * (max - min) + min;
		}
		
		else {
			alert("Error: Random.nextFloat() invalid arguments");
		}
	}
}