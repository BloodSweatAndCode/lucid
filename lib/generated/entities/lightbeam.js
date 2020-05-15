// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a lightbeam, which is implemented by the underlying C# class `LightBeam`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the lightbeam
 * @example
 * // create a lightbeam
 * const { Entity } = require('lucid-dream');
 * const lightbeam = Entity.createLightbeam({});
 * @returns {Entity} The new lightbeam
 */
module.exports = function createLightbeam(data = {}) {
	return new (require('../../class/Entity'))('lightbeam', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};