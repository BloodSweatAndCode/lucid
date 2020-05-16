// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a crushBlock, which is implemented by the underlying C# class `CrushBlock`.
 * @class
 * @extends Entity
 */
class CrushBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the crushBlock
	 */
	constructor(data = {}) {
		return new Entity('crushBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CrushBlock;