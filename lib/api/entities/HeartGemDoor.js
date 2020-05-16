const Entity = require('../Entity');

class HeartGemDoor extends Entity {
	/**
	 * Creates an instance of {@link HeartGemDoor}, which is implemented by the underlying C# class `HeartGemDoor` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link HeartGemDoor} to be created
	 */
	constructor(data = {}) {
		return new Entity('heartGemDoor', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = HeartGemDoor;