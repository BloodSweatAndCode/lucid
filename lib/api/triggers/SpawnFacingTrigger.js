// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a spawnFacingTrigger, which is implemented by the underlying C# class `SpawnFacingTrigger`.
 * @class
 * @extends Trigger
 */
class SpawnFacingTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the spawnFacingTrigger
	 */
	constructor(data = {}) {
		return new Entity('spawnFacingTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = SpawnFacingTrigger;