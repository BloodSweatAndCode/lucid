const Entity = require('../Entity');

class TriggerSpikesUp extends Entity {
	/**
	 * Creates an instance of {@link TriggerSpikesUp}, which is implemented by the underlying C# class `TriggerSpikes` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TriggerSpikesUp} to be created
	 */
	constructor(data = {}) {
		return new Entity('triggerSpikesUp', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TriggerSpikesUp;