// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a starJumpBlock, which is implemented by the underlying C# class `StarJumpBlock`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the starJumpBlock
 * @example
 * // create a starJumpBlock
 * const { Entity } = require('lucid-dream');
 * const starJumpBlock = Entity.createStarJumpBlock({});
 * @returns {Entity} The new starJumpBlock
 */
module.exports = function createStarJumpBlock(data = {}) {
	return new (require('../../class/Entity'))('starJumpBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};