// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a playbackBillboard, which is implemented by the underlying C# class `PlaybackBillboard`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the playbackBillboard
 * @example
 * // create a playbackBillboard
 * const { Entity } = require('lucid-dream');
 * const playbackBillboard = Entity.createPlaybackBillboard({});
 * @returns {Entity} The new playbackBillboard
 */
module.exports = function createPlaybackBillboard(data = {}) {
	return new (require('../../class/Entity'))('playbackBillboard', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};