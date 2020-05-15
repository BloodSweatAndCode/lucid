// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a spawnFacingTrigger, which is implemented by the underlying C# class `SpawnFacingTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the spawnFacingTrigger
 * @example
 * // create a spawnFacingTrigger
 * const { Trigger } = require('lucid-dream');
 * const spawnFacingTrigger = Trigger.createSpawnFacingTrigger({});
 * @returns {Entity} The new spawnFacingTrigger
 */
module.exports = function createSpawnFacingTrigger(data = {}) {
	return new (require('../../class/Trigger'))('spawnFacingTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};