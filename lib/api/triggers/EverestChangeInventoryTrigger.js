const Entity = require('../Entity');

class EverestChangeInventoryTrigger extends Entity {
	/**
	 * Creates an instance of {@link EverestChangeInventoryTrigger}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link EverestChangeInventoryTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('everestChangeInventoryTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = EverestChangeInventoryTrigger;