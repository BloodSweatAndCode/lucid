// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a switchBlock, which is implemented by the underlying C# class `SwapBlock`.
 * @class
 * @extends Entity
 */
class SwitchBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the switchBlock
	 */
	constructor(data = {}) {
		return new Entity('switchBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SwitchBlock;