const Entity = require('../Entity');

/**
 * Creates a hahaha, which is implemented by the underlying C# class `Hahaha`.
 * @class
 * @extends Entity
 */
class Hahaha extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the hahaha
	 */
	constructor(data = {}) {
		return new Entity('hahaha', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Hahaha;