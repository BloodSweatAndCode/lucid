// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a lightning, which is implemented by the underlying C# class `Lightning`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the lightning
 * @example
 * // create a lightning
 * const { Entity } = require('lucid-dream');
 * const lightning = Entity.createLightning({});
 * @returns {Entity} The new lightning
 */
module.exports = function createLightning(data = {}) {
	return new (require('../../class/Entity'))('lightning', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};