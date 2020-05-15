// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a spikesDown, which is implemented by the underlying C# class `Spikes`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the spikesDown
 * @example
 * // create a spikesDown
 * const { Entity } = require('lucid-dream');
 * const spikesDown = Entity.createSpikesDown({});
 * @returns {Entity} The new spikesDown
 */
module.exports = function createSpikesDown(data = {}) {
	return new (require('../../class/Entity'))('spikesDown', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};