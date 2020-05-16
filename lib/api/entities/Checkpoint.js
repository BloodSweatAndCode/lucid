// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a checkpoint, which is implemented by the underlying C# classes `Checkpoint`, `Vector2?`.
 * @class
 * @extends Entity
 */
class Checkpoint extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the checkpoint
	 */
	constructor(data = {}) {
		return new Entity('checkpoint', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Checkpoint;