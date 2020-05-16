const Entity = require('../Entity');

class FallingBlock extends Entity {
	/**
	 * Creates an instance of {@link FallingBlock}, which is implemented by the underlying C# class `FallingBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link FallingBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('fallingBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FallingBlock;