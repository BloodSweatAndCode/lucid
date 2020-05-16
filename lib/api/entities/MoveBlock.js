const Entity = require('../Entity');

/**
 * Creates a moveBlock, which is implemented by the underlying C# class `MoveBlock`.
 * @class
 * @extends Entity
 */
class MoveBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the moveBlock
	 */
	constructor(data = {}) {
		return new Entity('moveBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = MoveBlock;