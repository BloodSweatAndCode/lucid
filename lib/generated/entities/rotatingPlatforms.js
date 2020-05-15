// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a rotatingPlatforms, which is implemented by the underlying C# class `RotatingPlatform`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the rotatingPlatforms
 * @example
 * // create a rotatingPlatforms
 * const { Entity } = require('lucid-dream');
 * const rotatingPlatforms = Entity.createRotatingPlatforms({});
 * @returns {Entity} The new rotatingPlatforms
 */
module.exports = function createRotatingPlatforms(data = {}) {
	return new (require('../../class/Entity'))('rotatingPlatforms', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};