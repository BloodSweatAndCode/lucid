// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a risingLava, which is implemented by the underlying C# class `RisingLava`.
 * @class
 * @extends Entity
 */
class RisingLava extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the risingLava
	 */
	constructor(data = {}) {
		return new Entity('risingLava', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = RisingLava;