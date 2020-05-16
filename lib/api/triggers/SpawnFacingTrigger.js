const Entity = require('../Entity');

class SpawnFacingTrigger extends Entity {
	/**
	 * Creates an instance of {@link SpawnFacingTrigger}, which is implemented by the underlying C# class `SpawnFacingTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link SpawnFacingTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('spawnFacingTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = SpawnFacingTrigger;