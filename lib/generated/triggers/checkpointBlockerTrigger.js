// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a checkpointBlockerTrigger, which is implemented by the underlying C# class `CheckpointBlockerTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the checkpointBlockerTrigger
 * @example
 * // create a checkpointBlockerTrigger
 * const { Trigger } = require('lucid-dream');
 * const checkpointBlockerTrigger = Trigger.createCheckpointBlockerTrigger({});
 * @returns {Entity} The new checkpointBlockerTrigger
 */
module.exports = function createCheckpointBlockerTrigger(data = {}) {
	return new (require('../../class/Trigger'))('checkpointBlockerTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};