// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a bloomFadeTrigger, which is implemented by the underlying C# class `BloomFadeTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the bloomFadeTrigger
 * @example
 * // create a bloomFadeTrigger
 * const { Trigger } = require('lucid-dream');
 * const bloomFadeTrigger = Trigger.createBloomFadeTrigger({});
 * @returns {Entity} The new bloomFadeTrigger
 */
module.exports = function createBloomFadeTrigger(data = {}) {
	return new (require('../../class/Trigger'))('bloomFadeTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};