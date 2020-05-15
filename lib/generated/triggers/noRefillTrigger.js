// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a noRefillTrigger, which is implemented by the underlying C# class `NoRefillTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the noRefillTrigger
 * @example
 * // create a noRefillTrigger
 * const { Trigger } = require('lucid-dream');
 * const noRefillTrigger = Trigger.createNoRefillTrigger({});
 * @returns {Entity} The new noRefillTrigger
 */
module.exports = function createNoRefillTrigger(data = {}) {
	return new (require('../../class/Trigger'))('noRefillTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};