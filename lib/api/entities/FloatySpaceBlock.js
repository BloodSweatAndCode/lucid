const Entity = require('../Entity');

/**
 * Creates a floatySpaceBlock, which is implemented by the underlying C# class `FloatySpaceBlock`.
 * @class
 * @extends Entity
 */
class FloatySpaceBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the floatySpaceBlock
	 */
	constructor(data = {}) {
		return new Entity('floatySpaceBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FloatySpaceBlock;