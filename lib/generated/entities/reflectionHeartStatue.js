// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a reflectionHeartStatue, which is implemented by the underlying C# class `ReflectionHeartStatue`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the reflectionHeartStatue
 * @example
 * // create a reflectionHeartStatue
 * const { Entity } = require('lucid-dream');
 * const reflectionHeartStatue = Entity.createReflectionHeartStatue({});
 * @returns {Entity} The new reflectionHeartStatue
 */
module.exports = function createReflectionHeartStatue(data = {}) {
	return new (require('../../class/Entity'))('reflectionHeartStatue', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};