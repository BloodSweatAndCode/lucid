// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a respawnTargetTrigger, which is implemented by the underlying C# class `RespawnTargetTrigger`.
 * @class
 * @extends Trigger
 */
class RespawnTargetTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the respawnTargetTrigger
	 */
	constructor(data = {}) {
		return new Entity('respawnTargetTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = RespawnTargetTrigger;