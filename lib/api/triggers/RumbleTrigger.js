const Entity = require('../Entity');

/**
 * Creates a rumbleTrigger, which is implemented by the underlying C# class `RumbleTrigger`.
 * @class
 * @extends Trigger
 */
class RumbleTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the rumbleTrigger
	 */
	constructor(data = {}) {
		return new Entity('rumbleTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = RumbleTrigger;