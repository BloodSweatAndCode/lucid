// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a checkpointBlockerTrigger, which is implemented by the underlying C# class `CheckpointBlockerTrigger`.
 * @class
 * @extends Trigger
 */
class CheckpointBlockerTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the checkpointBlockerTrigger
	 */
	constructor(data = {}) {
		return new Entity('checkpointBlockerTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = CheckpointBlockerTrigger;