// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a light, which is implemented by the underlying C# class `PropLight`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the light
 * @example
 * // create a light
 * const { Entity } = require('lucid-dream');
 * const light = Entity.createLight({});
 * @returns {Entity} The new light
 */
module.exports = function createLight(data = {}) {
	return new (require('../../class/Entity'))('light', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};