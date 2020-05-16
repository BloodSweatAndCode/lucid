const Entity = require('../Entity');

class NoRefillTrigger extends Entity {
	/**
	 * Creates an instance of {@link NoRefillTrigger}, which is implemented by the underlying C# class `NoRefillTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link NoRefillTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('noRefillTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = NoRefillTrigger;