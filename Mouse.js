function Mouse() {
	const name="LyLy"
	this.dead = false;
}

Mouse.prototype.die = function() {
	this.dead = true;
}

Mouse.prototype.run = function() {
	console.log('Run')
}

module.exports = Mouse;