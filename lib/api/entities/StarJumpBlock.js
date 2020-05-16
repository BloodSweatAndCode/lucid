const Entity = require('../Entity');

/**
 * Creates a starJumpBlock, which is implemented by the underlying C# class `StarJumpBlock`.
 * @class
 * @extends Entity
 */
class StarJumpBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the starJumpBlock
	 */
	constructor(data = {}) {
		return new Entity('starJumpBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = StarJumpBlock;