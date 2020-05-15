// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a stopBoostTrigger, which is implemented by the underlying C# class `StopBoostTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the stopBoostTrigger
 * @example
 * // create a stopBoostTrigger
 * const { Trigger } = require('lucid-dream');
 * const stopBoostTrigger = Trigger.createStopBoostTrigger({});
 * @returns {Entity} The new stopBoostTrigger
 */
module.exports = function createStopBoostTrigger(data = {}) {
	return new (require('../../class/Trigger'))('stopBoostTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};