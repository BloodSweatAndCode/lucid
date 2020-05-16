// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a spring, which is implemented by the underlying C# class `Spring`.
 * @class
 * @extends Entity
 */
class Spring extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the spring
	 */
	constructor(data = {}) {
		return new Entity('spring', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Spring;