const Entity = require('../Entity');

/**
 * Creates a eventTrigger, which is implemented by the underlying C# class `EventTrigger`.
 * @class
 * @extends Trigger
 */
class EventTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the eventTrigger
	 */
	constructor(data = {}) {
		return new Entity('eventTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = EventTrigger;