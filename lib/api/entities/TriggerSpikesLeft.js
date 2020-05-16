const Entity = require('../Entity');

class TriggerSpikesLeft extends Entity {
	/**
	 * Creates an instance of {@link TriggerSpikesLeft}, which is implemented by the underlying C# class `TriggerSpikes` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TriggerSpikesLeft} to be created
	 */
	constructor(data = {}) {
		return new Entity('triggerSpikesLeft', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TriggerSpikesLeft;