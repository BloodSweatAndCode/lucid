const Entity = require('../Entity');

class OshiroTrigger extends Entity {
	/**
	 * Creates an instance of {@link OshiroTrigger}, which is implemented by the underlying C# class `OshiroTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link OshiroTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('oshiroTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = OshiroTrigger;