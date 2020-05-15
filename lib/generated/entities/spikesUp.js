// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a spikesUp, which is implemented by the underlying C# class `Spikes`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the spikesUp
 * @example
 * // create a spikesUp
 * const { Entity } = require('lucid-dream');
 * const spikesUp = Entity.createSpikesUp({});
 * @returns {Entity} The new spikesUp
 */
module.exports = function createSpikesUp(data = {}) {
	return new (require('../../class/Entity'))('spikesUp', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};