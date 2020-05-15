// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a altMusicTrigger, which is implemented by the underlying C# class `AltMusicTrigger`.
 * @augments {Trigger}
 * @param {Object} [data={}] - An Object containing the attributes of the altMusicTrigger
 * @example
 * // create a altMusicTrigger
 * const { Trigger } = require('lucid-dream');
 * const altMusicTrigger = Trigger.createAltMusicTrigger({});
 * @returns {Entity} The new altMusicTrigger
 */
module.exports = function createAltMusicTrigger(data = {}) {
	return new (require('../../class/Trigger'))('altMusicTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};