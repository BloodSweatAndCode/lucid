// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a glider, which is implemented by the underlying C# class `Glider`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the glider
 * @example
 * // create a glider
 * const { Entity } = require('lucid-dream');
 * const glider = Entity.createGlider({});
 * @returns {Entity} The new glider
 */
module.exports = function createGlider(data = {}) {
	return new (require('../../class/Entity'))('glider', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};