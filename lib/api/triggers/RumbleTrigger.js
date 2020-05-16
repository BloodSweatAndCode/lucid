const Entity = require('../Entity');

class RumbleTrigger extends Entity {
	/**
	 * Creates an instance of {@link RumbleTrigger}, which is implemented by the underlying C# class `RumbleTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link RumbleTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('rumbleTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = RumbleTrigger;