const Entity = require('../Entity');

/**
 * Creates a whiteblock, which is implemented by the underlying C# class `WhiteBlock`.
 * @class
 * @extends Entity
 */
class Whiteblock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the whiteblock
	 */
	constructor(data = {}) {
		return new Entity('whiteblock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Whiteblock;