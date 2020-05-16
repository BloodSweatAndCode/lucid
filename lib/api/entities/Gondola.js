// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a gondola, which is implemented by the underlying C# class `Gondola`.
 * @class
 * @extends Entity
 */
class Gondola extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the gondola
	 */
	constructor(data = {}) {
		return new Entity('gondola', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Gondola;