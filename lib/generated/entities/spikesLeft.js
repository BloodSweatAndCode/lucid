// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a spikesLeft, which is implemented by the underlying C# class `Spikes`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the spikesLeft
 * @example
 * // create a spikesLeft
 * const { Entity } = require('lucid-dream');
 * const spikesLeft = Entity.createSpikesLeft({});
 * @returns {Entity} The new spikesLeft
 */
module.exports = function createSpikesLeft(data = {}) {
	return new (require('../../class/Entity'))('spikesLeft', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};