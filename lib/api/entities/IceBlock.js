// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a iceBlock, which is implemented by the underlying C# class `IceBlock`.
 * @class
 * @extends Entity
 */
class IceBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the iceBlock
	 */
	constructor(data = {}) {
		return new Entity('iceBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = IceBlock;