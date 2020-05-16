const Entity = require('../Entity');

class ChangeRespawnTrigger extends Entity {
	/**
	 * Creates an instance of {@link ChangeRespawnTrigger}, which is implemented by the underlying C# class `ChangeRespawnTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link ChangeRespawnTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('changeRespawnTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = ChangeRespawnTrigger;