const Entity = require('../Entity');

class Checkpoint extends Entity {
	/**
	 * Creates an instance of {@link Checkpoint}, which is implemented by the underlying C# classes `Checkpoint`, `Vector2?` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Checkpoint} to be created
	 */
	constructor(data = {}) {
		return new Entity('checkpoint', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Checkpoint;