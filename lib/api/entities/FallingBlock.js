// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a fallingBlock, which is implemented by the underlying C# class `FallingBlock`.
 * @class
 * @extends Entity
 */
class FallingBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the fallingBlock
	 */
	constructor(data = {}) {
		return new Entity('fallingBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FallingBlock;