// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a musicFadeTrigger, which is implemented by the underlying C# class `MusicFadeTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the musicFadeTrigger
 * @example
 * // create a musicFadeTrigger
 * const { Trigger } = require('lucid-dream');
 * const musicFadeTrigger = Trigger.createMusicFadeTrigger({});
 * @returns {Entity} The new musicFadeTrigger
 */
module.exports = function createMusicFadeTrigger(data = {}) {
	return new (require('../../class/Trigger'))('musicFadeTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};