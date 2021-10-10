var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var cat = new Cat("Tom");
var mouse = new Mouse("Jerry");
var dog = new Dog("JJLee");
cat.eat(mouse);
try {
	cat.eat(dog);
} catch(error) {
	console.log('Error while cat eating animals that are not mouse!')
}