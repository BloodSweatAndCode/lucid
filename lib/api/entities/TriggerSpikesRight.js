const Entity = require('../Entity');

class TriggerSpikesRight extends Entity {
	/**
	 * Creates an instance of {@link TriggerSpikesRight}, which is implemented by the underlying C# class `TriggerSpikes` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TriggerSpikesRight} to be created
	 */
	constructor(data = {}) {
		return new Entity('triggerSpikesRight', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TriggerSpikesRight;