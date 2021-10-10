var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var cat = new Cat("Tom");
var mouse = new Mouse("Jerry");
var dog = new Dog("JJLee");
cat.eat(mouse);
cat.eat(dog);