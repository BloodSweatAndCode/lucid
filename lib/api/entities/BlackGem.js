const Entity = require('../Entity');

class BlackGem extends Entity {
	/**
	 * Creates an instance of {@link BlackGem}, which is implemented by the underlying C# class `HeartGem` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BlackGem} to be created
	 */
	constructor(data = {}) {
		return new Entity('blackGem', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BlackGem;