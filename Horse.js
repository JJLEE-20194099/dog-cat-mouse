function Horse() {
}

Hotse.prototype.jump = function() {
	console.log('jumping');
}
;
Horse.prototype.run = function() {
	console.log('Running');
};

module.exports = Horse;