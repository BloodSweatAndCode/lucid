// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a lightFadeTrigger, which is implemented by the underlying C# class `LightFadeTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the lightFadeTrigger
 * @example
 * // create a lightFadeTrigger
 * const { Trigger } = require('lucid-dream');
 * const lightFadeTrigger = Trigger.createLightFadeTrigger({});
 * @returns {Entity} The new lightFadeTrigger
 */
module.exports = function createLightFadeTrigger(data = {}) {
	return new (require('../../class/Trigger'))('lightFadeTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};