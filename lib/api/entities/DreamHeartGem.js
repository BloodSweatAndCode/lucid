const Entity = require('../Entity');

class DreamHeartGem extends Entity {
	/**
	 * Creates an instance of {@link DreamHeartGem}, which is implemented by the underlying C# class `DreamHeartGem` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link DreamHeartGem} to be created
	 */
	constructor(data = {}) {
		return new Entity('dreamHeartGem', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = DreamHeartGem;