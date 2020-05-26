const Entity = require('../Entity');

class EverestCoreModeTrigger extends Entity {
	/**
	 * Creates an instance of {@link EverestCoreModeTrigger}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link EverestCoreModeTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('everestCoreModeTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = EverestCoreModeTrigger;