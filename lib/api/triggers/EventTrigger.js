const Entity = require('../Entity');

class EventTrigger extends Entity {
	/**
	 * Creates an instance of {@link EventTrigger}, which is implemented by the underlying C# class `EventTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link EventTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('eventTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = EventTrigger;