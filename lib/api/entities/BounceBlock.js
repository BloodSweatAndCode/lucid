// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a bounceBlock, which is implemented by the underlying C# class `BounceBlock`.
 * @class
 * @extends Entity
 */
class BounceBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the bounceBlock
	 */
	constructor(data = {}) {
		return new Entity('bounceBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BounceBlock;