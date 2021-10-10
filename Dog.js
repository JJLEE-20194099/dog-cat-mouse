import chalk from 'chalk';
function Dog(name) {
	const name=name
	this.stomach = [];	
}

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
}


Dog.prototype.sayHi = function() {
	console.log(`Hi! I am a dig. My name is ${chalk.red(this.name)}`);
}

export default Dog;