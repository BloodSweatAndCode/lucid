const Entity = require('../Entity');

/**
 * Creates a dreamBlock, which is implemented by the underlying C# class `DreamBlock`.
 * @class
 * @extends Entity
 */
class DreamBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the dreamBlock
	 */
	constructor(data = {}) {
		return new Entity('dreamBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = DreamBlock;