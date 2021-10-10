var chalk = require('chalk');

function Cat(name) {
	this.name = name;
	this.stomach = [];
	
}

Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
}


Cat.prototype.sayHi = function() {
	console.log(`Hello! I am a cat. My name is ${chalk.red(this.name)}`);
}

module.exports = Cat;