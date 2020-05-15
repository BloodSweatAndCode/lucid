// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a wallSpringRight, which is implemented by the underlying C# class `Spring`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the wallSpringRight
 * @example
 * // create a wallSpringRight
 * const { Entity } = require('lucid-dream');
 * const wallSpringRight = Entity.createWallSpringRight({});
 * @returns {Entity} The new wallSpringRight
 */
module.exports = function createWallSpringRight(data = {}) {
	return new (require('../../class/Entity'))('wallSpringRight', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};