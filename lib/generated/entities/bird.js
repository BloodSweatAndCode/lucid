// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a bird, which is implemented by the underlying C# class `BirdNPC`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the bird
 * @example
 * // create a bird
 * const { Entity } = require('lucid-dream');
 * const bird = Entity.createBird({});
 * @returns {Entity} The new bird
 */
module.exports = function createBird(data = {}) {
	return new (require('../../class/Entity'))('bird', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};