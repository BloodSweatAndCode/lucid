// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a invisibleBarrier, which is implemented by the underlying C# class `InvisibleBarrier`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the invisibleBarrier
 * @example
 * // create a invisibleBarrier
 * const { Entity } = require('lucid-dream');
 * const invisibleBarrier = Entity.createInvisibleBarrier({});
 * @returns {Entity} The new invisibleBarrier
 */
module.exports = function createInvisibleBarrier(data = {}) {
	return new (require('../../class/Entity'))('invisibleBarrier', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};