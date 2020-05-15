// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a fireBarrier, which is implemented by the underlying C# class `FireBarrier`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the fireBarrier
 * @example
 * // create a fireBarrier
 * const { Entity } = require('lucid-dream');
 * const fireBarrier = Entity.createFireBarrier({});
 * @returns {Entity} The new fireBarrier
 */
module.exports = function createFireBarrier(data = {}) {
	return new (require('../../class/Entity'))('fireBarrier', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};