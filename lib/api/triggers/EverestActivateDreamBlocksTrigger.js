const Entity = require('../Entity');

class EverestActivateDreamBlocksTrigger extends Entity {
	/**
	 * Creates an instance of {@link EverestActivateDreamBlocksTrigger}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link EverestActivateDreamBlocksTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('everestActivateDreamBlocksTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = EverestActivateDreamBlocksTrigger;