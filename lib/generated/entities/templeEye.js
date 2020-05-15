// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a templeEye, which is implemented by the underlying C# class `TempleEye`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the templeEye
 * @example
 * // create a templeEye
 * const { Entity } = require('lucid-dream');
 * const templeEye = Entity.createTempleEye({});
 * @returns {Entity} The new templeEye
 */
module.exports = function createTempleEye(data = {}) {
	return new (require('../../class/Entity'))('templeEye', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};