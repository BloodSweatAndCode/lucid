const Entity = require('../Entity');

class Whiteblock extends Entity {
	/**
	 * Creates an instance of {@link Whiteblock}, which is implemented by the underlying C# class `WhiteBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Whiteblock} to be created
	 */
	constructor(data = {}) {
		return new Entity('whiteblock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Whiteblock;