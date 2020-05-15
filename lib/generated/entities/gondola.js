// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a gondola, which is implemented by the underlying C# class `Gondola`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the gondola
 * @example
 * // create a gondola
 * const { Entity } = require('lucid-dream');
 * const gondola = Entity.createGondola({});
 * @returns {Entity} The new gondola
 */
module.exports = function createGondola(data = {}) {
	return new (require('../../class/Entity'))('gondola', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};