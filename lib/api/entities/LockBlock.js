const Entity = require('../Entity');

class LockBlock extends Entity {
	/**
	 * Creates an instance of {@link LockBlock}, which is implemented by the underlying C# class `LockBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link LockBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('lockBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = LockBlock;