const Entity = require('../Entity');

class TriggerSpikesOriginalUp extends Entity {
	/**
	 * Creates an instance of {@link TriggerSpikesOriginalUp}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TriggerSpikesOriginalUp} to be created
	 */
	constructor(data = {}) {
		return new Entity('triggerSpikesOriginalUp', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TriggerSpikesOriginalUp;