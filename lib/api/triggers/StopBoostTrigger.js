const Entity = require('../Entity');

class StopBoostTrigger extends Entity {
	/**
	 * Creates an instance of {@link StopBoostTrigger}, which is implemented by the underlying C# class `StopBoostTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link StopBoostTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('stopBoostTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = StopBoostTrigger;