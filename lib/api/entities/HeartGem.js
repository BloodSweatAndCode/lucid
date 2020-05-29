const Entity = require('../Entity');

class HeartGem extends Entity {
	/**
	 * Creates an instance of {@link HeartGem}, which is implemented by the underlying C# class `HeartGem` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link HeartGem} to be created
	 */
	constructor(data = {}, id) {
		super('blackGem', Object.assign({
			x: 0,
			y: 0,
			fake: false,
			removeCameraTriggers: false
		}, data), id);
	}
}

HeartGem.sprite = {
	path: 'collectables/heartGem/0/00.png'
};

module.exports = HeartGem;