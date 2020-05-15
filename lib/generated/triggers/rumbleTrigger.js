// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a rumbleTrigger, which is implemented by the underlying C# class `RumbleTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the rumbleTrigger
 * @example
 * // create a rumbleTrigger
 * const { Trigger } = require('lucid-dream');
 * const rumbleTrigger = Trigger.createRumbleTrigger({});
 * @returns {Entity} The new rumbleTrigger
 */
module.exports = function createRumbleTrigger(data = {}) {
	return new (require('../../class/Trigger'))('rumbleTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};