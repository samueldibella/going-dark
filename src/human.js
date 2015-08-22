var Human = (function() {
	var Human = function(name) {
		this.name = name;
		this.health = 100;
		this.position = 0;
	};

	Human.prototype.constructor = Human;

	Human.prototype.doRandomAction = function() {
		var action = Math.floor(Math.random() * 3);

		switch(action) {
			case 0:
				this.pause();
				break;
			case 1:
				this.rest();
				break;
			case 2:
				this.advance();
				break;
		}
	};

	Human.prototype.pause = function() {
		return;
	};

	Human.prototype.rest = function() {
		while (this.health < 100) this.health++;
		//todo- do this proportionately?
	};

	Human.prototype.advance = function() {
		while (this.position < 4) this.position++;
	};

	Human.prototype.getHealth = function() {
		return this.health;
	};

	Human.prototype.setHealth = function(health) {
		this.health += health;
	};

	return Human;
})();