// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a lightning, which is implemented by the underlying C# class `Lightning`.
 * @class
 * @extends Entity
 */
class Lightning extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the lightning
	 */
	constructor(data = {}) {
		return new Entity('lightning', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Lightning;