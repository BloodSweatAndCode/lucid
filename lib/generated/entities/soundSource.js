// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a soundSource, which is implemented by the underlying C# class `SoundSourceEntity`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the soundSource
 * @example
 * // create a soundSource
 * const { Entity } = require('lucid-dream');
 * const soundSource = Entity.createSoundSource({});
 * @returns {Entity} The new soundSource
 */
module.exports = function createSoundSource(data = {}) {
	return new (require('../../class/Entity'))('soundSource', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};