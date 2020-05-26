const Entity = require('../Entity');

class TriggerSpikesOriginalRight extends Entity {
	/**
	 * Creates an instance of {@link TriggerSpikesOriginalRight}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TriggerSpikesOriginalRight} to be created
	 */
	constructor(data = {}) {
		return new Entity('triggerSpikesOriginalRight', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TriggerSpikesOriginalRight;