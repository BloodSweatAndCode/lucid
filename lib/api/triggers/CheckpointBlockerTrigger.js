const Entity = require('../Entity');

class CheckpointBlockerTrigger extends Entity {
	/**
	 * Creates an instance of {@link CheckpointBlockerTrigger}, which is implemented by the underlying C# class `CheckpointBlockerTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CheckpointBlockerTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('checkpointBlockerTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = CheckpointBlockerTrigger;