const Entity = require('../Entity');

class TriggerSpikesOriginalDown extends Entity {
	/**
	 * Creates an instance of {@link TriggerSpikesOriginalDown}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TriggerSpikesOriginalDown} to be created
	 */
	constructor(data = {}) {
		return new Entity('triggerSpikesOriginalDown', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TriggerSpikesOriginalDown;