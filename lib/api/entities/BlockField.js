// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a blockField, which is implemented by the underlying C# class `BlockField`.
 * @class
 * @extends Entity
 */
class BlockField extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the blockField
	 */
	constructor(data = {}) {
		return new Entity('blockField', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BlockField;