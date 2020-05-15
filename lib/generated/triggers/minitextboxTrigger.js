// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a minitextboxTrigger, which is implemented by the underlying C# class `MiniTextboxTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the minitextboxTrigger
 * @example
 * // create a minitextboxTrigger
 * const { Trigger } = require('lucid-dream');
 * const minitextboxTrigger = Trigger.createMinitextboxTrigger({});
 * @returns {Entity} The new minitextboxTrigger
 */
module.exports = function createMinitextboxTrigger(data = {}) {
	return new (require('../../class/Trigger'))('minitextboxTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};