const Entity = require('../Entity');

class DreamHeartGem extends Entity {
	/**
	 * Creates an instance of {@link DreamHeartGem}, which is implemented by the underlying C# class `DreamHeartGem` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link DreamHeartGem} to be created
	 */
	constructor(data = {}, id) {
		super('dreamHeartGem', Object.assign({
			x: 0,
			y: 0
		}, data), id);
	}
}

DreamHeartGem.sprite = {
	path: 'collectables/heartGem/0/00.png'
};

module.exports = DreamHeartGem;