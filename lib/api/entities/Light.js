// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a light, which is implemented by the underlying C# class `PropLight`.
 * @class
 * @extends Entity
 */
class Light extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the light
	 */
	constructor(data = {}) {
		return new Entity('light', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Light;