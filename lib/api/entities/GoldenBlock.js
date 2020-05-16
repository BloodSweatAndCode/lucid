// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a goldenBlock, which is implemented by the underlying C# class `GoldenBlock`.
 * @class
 * @extends Entity
 */
class GoldenBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the goldenBlock
	 */
	constructor(data = {}) {
		return new Entity('goldenBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = GoldenBlock;