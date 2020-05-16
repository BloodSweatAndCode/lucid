const Entity = require('../Entity');

class TriggerSpikesDown extends Entity {
	/**
	 * Creates an instance of {@link TriggerSpikesDown}, which is implemented by the underlying C# class `TriggerSpikes` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TriggerSpikesDown} to be created
	 */
	constructor(data = {}) {
		return new Entity('triggerSpikesDown', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TriggerSpikesDown;