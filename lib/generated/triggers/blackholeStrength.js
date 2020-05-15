// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a blackholeStrength, which is implemented by the underlying C# class `BlackholeStrengthTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the blackholeStrength
 * @example
 * // create a blackholeStrength
 * const { Trigger } = require('lucid-dream');
 * const blackholeStrength = Trigger.createBlackholeStrength({});
 * @returns {Entity} The new blackholeStrength
 */
module.exports = function createBlackholeStrength(data = {}) {
	return new (require('../../class/Trigger'))('blackholeStrength', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};