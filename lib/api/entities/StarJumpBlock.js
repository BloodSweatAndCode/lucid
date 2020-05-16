const Entity = require('../Entity');

class StarJumpBlock extends Entity {
	/**
	 * Creates an instance of {@link StarJumpBlock}, which is implemented by the underlying C# class `StarJumpBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link StarJumpBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('starJumpBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = StarJumpBlock;