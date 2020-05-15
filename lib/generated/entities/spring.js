// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a spring, which is implemented by the underlying C# class `Spring`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the spring
 * @example
 * // create a spring
 * const { Entity } = require('lucid-dream');
 * const spring = Entity.createSpring({});
 * @returns {Entity} The new spring
 */
module.exports = function createSpring(data = {}) {
	return new (require('../../class/Entity'))('spring', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};