const Entity = require('../Entity');

class CreditsTrigger extends Entity {
	/**
	 * Creates an instance of {@link CreditsTrigger}, which is implemented by the underlying C# class `CreditsTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CreditsTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('creditsTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = CreditsTrigger;