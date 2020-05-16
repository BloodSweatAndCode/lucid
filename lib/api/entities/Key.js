const Entity = require('../Entity');

/**
 * Creates a key, which is implemented by the underlying C# class `Key`.
 * @class
 * @extends Entity
 */
class Key extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the key
	 */
	constructor(data = {}) {
		return new Entity('key', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Key;