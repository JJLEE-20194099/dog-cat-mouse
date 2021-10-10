function Mouse() {
	const name="LyLy"
	this.dead = false;
}

Mouse.prototype.die = function() {
	this.dead = true;
}

Mouse.prototype.sleep = function() {
	console.log('Sleeping...')
}

module.exports = Mouse;