// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a seekerBarrier, which is implemented by the underlying C# class `SeekerBarrier`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the seekerBarrier
 * @example
 * // create a seekerBarrier
 * const { Entity } = require('lucid-dream');
 * const seekerBarrier = Entity.createSeekerBarrier({});
 * @returns {Entity} The new seekerBarrier
 */
module.exports = function createSeekerBarrier(data = {}) {
	return new (require('../../class/Entity'))('seekerBarrier', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};