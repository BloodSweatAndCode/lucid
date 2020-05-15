// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a eventTrigger, which is implemented by the underlying C# class `EventTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the eventTrigger
 * @example
 * // create a eventTrigger
 * const { Trigger } = require('lucid-dream');
 * const eventTrigger = Trigger.createEventTrigger({});
 * @returns {Entity} The new eventTrigger
 */
module.exports = function createEventTrigger(data = {}) {
	return new (require('../../class/Trigger'))('eventTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};