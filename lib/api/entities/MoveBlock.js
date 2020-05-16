const Entity = require('../Entity');

class MoveBlock extends Entity {
	/**
	 * Creates an instance of {@link MoveBlock}, which is implemented by the underlying C# class `MoveBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link MoveBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('moveBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = MoveBlock;