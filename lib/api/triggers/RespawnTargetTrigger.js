const Entity = require('../Entity');

class RespawnTargetTrigger extends Entity {
	/**
	 * Creates an instance of {@link RespawnTargetTrigger}, which is implemented by the underlying C# class `RespawnTargetTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link RespawnTargetTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('respawnTargetTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = RespawnTargetTrigger;