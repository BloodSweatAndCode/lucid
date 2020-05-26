const Entity = require('../Entity');

class EverestDialogTrigger extends Entity {
	/**
	 * Creates an instance of {@link EverestDialogTrigger}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link EverestDialogTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('everestDialogTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = EverestDialogTrigger;