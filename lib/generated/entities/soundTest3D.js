// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a SoundTest3d, which is implemented by the underlying C# class `_3dSoundTest`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the SoundTest3d
 * @example
 * // create a SoundTest3d
 * const { Entity } = require('lucid-dream');
 * const SoundTest3d = Entity.createSoundTest3d({});
 * @returns {Entity} The new SoundTest3d
 */
module.exports = function createSoundTest3d(data = {}) {
	return new (require('../../class/Entity'))('SoundTest3d', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};