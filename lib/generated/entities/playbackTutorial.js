// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a playbackTutorial, which is implemented by the underlying C# class `PlayerPlayback`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the playbackTutorial
 * @example
 * // create a playbackTutorial
 * const { Entity } = require('lucid-dream');
 * const playbackTutorial = Entity.createPlaybackTutorial({});
 * @returns {Entity} The new playbackTutorial
 */
module.exports = function createPlaybackTutorial(data = {}) {
	return new (require('../../class/Entity'))('playbackTutorial', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};