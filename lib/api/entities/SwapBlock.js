// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a swapBlock, which is implemented by the underlying C# class .
 * @class
 * @extends Entity
 */
class SwapBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the swapBlock
	 */
	constructor(data = {}) {
		return new Entity('swapBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SwapBlock;