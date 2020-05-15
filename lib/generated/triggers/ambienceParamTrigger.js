// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a ambienceParamTrigger, which is implemented by the underlying C# class `AmbienceParamTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the ambienceParamTrigger
 * @example
 * // create a ambienceParamTrigger
 * const { Trigger } = require('lucid-dream');
 * const ambienceParamTrigger = Trigger.createAmbienceParamTrigger({});
 * @returns {Entity} The new ambienceParamTrigger
 */
module.exports = function createAmbienceParamTrigger(data = {}) {
	return new (require('../../class/Trigger'))('ambienceParamTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};