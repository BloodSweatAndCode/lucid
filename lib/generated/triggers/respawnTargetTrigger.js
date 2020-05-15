// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a respawnTargetTrigger, which is implemented by the underlying C# class `RespawnTargetTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the respawnTargetTrigger
 * @example
 * // create a respawnTargetTrigger
 * const { Trigger } = require('lucid-dream');
 * const respawnTargetTrigger = Trigger.createRespawnTargetTrigger({});
 * @returns {Entity} The new respawnTargetTrigger
 */
module.exports = function createRespawnTargetTrigger(data = {}) {
	return new (require('../../class/Trigger'))('respawnTargetTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};