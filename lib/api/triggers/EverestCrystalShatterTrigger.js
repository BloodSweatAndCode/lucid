const Entity = require('../Entity');

class EverestCrystalShatterTrigger extends Entity {
	/**
	 * Creates an instance of {@link EverestCrystalShatterTrigger}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link EverestCrystalShatterTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('everestCrystalShatterTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = EverestCrystalShatterTrigger;