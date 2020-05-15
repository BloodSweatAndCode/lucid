// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a wallSpringLeft, which is implemented by the underlying C# class `Spring`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the wallSpringLeft
 * @example
 * // create a wallSpringLeft
 * const { Entity } = require('lucid-dream');
 * const wallSpringLeft = Entity.createWallSpringLeft({});
 * @returns {Entity} The new wallSpringLeft
 */
module.exports = function createWallSpringLeft(data = {}) {
	return new (require('../../class/Entity'))('wallSpringLeft', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};