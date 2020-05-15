// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a flingBird, which is implemented by the underlying C# class `FlingBird`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the flingBird
 * @example
 * // create a flingBird
 * const { Entity } = require('lucid-dream');
 * const flingBird = Entity.createFlingBird({});
 * @returns {Entity} The new flingBird
 */
module.exports = function createFlingBird(data = {}) {
	return new (require('../../class/Entity'))('flingBird', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};