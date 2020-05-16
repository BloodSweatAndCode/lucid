const Entity = require('../Entity');

/**
 * Creates a blackGem, which is implemented by the underlying C# class `HeartGem`.
 * @class
 * @extends Entity
 */
class BlackGem extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the blackGem
	 */
	constructor(data = {}) {
		return new Entity('blackGem', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BlackGem;