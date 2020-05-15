// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a musicTrigger, which is implemented by the underlying C# class `MusicTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the musicTrigger
 * @example
 * // create a musicTrigger
 * const { Trigger } = require('lucid-dream');
 * const musicTrigger = Trigger.createMusicTrigger({});
 * @returns {Entity} The new musicTrigger
 */
module.exports = function createMusicTrigger(data = {}) {
	return new (require('../../class/Trigger'))('musicTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};