var chalk = require('chalk');
var Mouse = require('./Mouse');

function Cat(name) {
	this.name = name;
	this.stomach = [];
	
}

Cat.prototype.eat = function(animal) {
	
	if (animal instanceof Mouse) {

		this.stomach.push(animal);
	} else {
		throw new Error('Cat can only eat mouse!')
	}
	
}


Cat.prototype.sayHi = function() {
	console.log(`Hello! I am a cat. My name is ${chalk.red(this.name)}`);
}

module.exports = Cat;