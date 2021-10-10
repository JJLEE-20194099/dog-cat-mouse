function Mouse() {
	const name="LyLy"
	this.dead = false;
}

Mouse.prototype.die = function() {
	this.dead = true;
}

module.exports = Mouse;