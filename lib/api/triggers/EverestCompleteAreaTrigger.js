const Entity = require('../Entity');

class EverestCompleteAreaTrigger extends Entity {
	/**
	 * Creates an instance of {@link EverestCompleteAreaTrigger}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link EverestCompleteAreaTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('everestCompleteAreaTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = EverestCompleteAreaTrigger;