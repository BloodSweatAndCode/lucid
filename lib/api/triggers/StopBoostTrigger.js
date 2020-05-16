const Entity = require('../Entity');

/**
 * Creates a stopBoostTrigger, which is implemented by the underlying C# class `StopBoostTrigger`.
 * @class
 * @extends Trigger
 */
class StopBoostTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the stopBoostTrigger
	 */
	constructor(data = {}) {
		return new Entity('stopBoostTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = StopBoostTrigger;