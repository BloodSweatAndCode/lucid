// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a changeRespawnTrigger, which is implemented by the underlying C# class `ChangeRespawnTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the changeRespawnTrigger
 * @example
 * // create a changeRespawnTrigger
 * const { Trigger } = require('lucid-dream');
 * const changeRespawnTrigger = Trigger.createChangeRespawnTrigger({});
 * @returns {Entity} The new changeRespawnTrigger
 */
module.exports = function createChangeRespawnTrigger(data = {}) {
	return new (require('../../class/Trigger'))('changeRespawnTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};