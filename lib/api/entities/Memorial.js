// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a memorial, which is implemented by the underlying C# class `Memorial`.
 * @class
 * @extends Entity
 */
class Memorial extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the memorial
	 */
	constructor(data = {}) {
		return new Entity('memorial', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Memorial;