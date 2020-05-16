const Entity = require('../Entity');

/**
 * Creates a lockBlock, which is implemented by the underlying C# class `LockBlock`.
 * @class
 * @extends Entity
 */
class LockBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the lockBlock
	 */
	constructor(data = {}) {
		return new Entity('lockBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = LockBlock;