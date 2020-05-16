const Entity = require('../Entity');

/**
 * Creates a bonfire, which is implemented by the underlying C# class `Bonfire`.
 * @class
 * @extends Entity
 */
class Bonfire extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the bonfire
	 */
	constructor(data = {}) {
		return new Entity('bonfire', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Bonfire;