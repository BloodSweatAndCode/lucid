const Entity = require('../Entity');

class EverestLavaBlockerTrigger extends Entity {
	/**
	 * Creates an instance of {@link EverestLavaBlockerTrigger}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link EverestLavaBlockerTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('everestLavaBlockerTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = EverestLavaBlockerTrigger;