const Entity = require('../Entity');

/**
 * Creates a noRefillTrigger, which is implemented by the underlying C# class `NoRefillTrigger`.
 * @class
 * @extends Trigger
 */
class NoRefillTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the noRefillTrigger
	 */
	constructor(data = {}) {
		return new Entity('noRefillTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = NoRefillTrigger;