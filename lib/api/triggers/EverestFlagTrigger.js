const Entity = require('../Entity');

class EverestFlagTrigger extends Entity {
	/**
	 * Creates an instance of {@link EverestFlagTrigger}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link EverestFlagTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('everestFlagTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = EverestFlagTrigger;