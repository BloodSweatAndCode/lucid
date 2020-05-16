const Entity = require('../Entity');

class InteractTrigger extends Entity {
	/**
	 * Creates an instance of {@link InteractTrigger}, which is implemented by the underlying C# class `InteractTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link InteractTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('interactTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = InteractTrigger;