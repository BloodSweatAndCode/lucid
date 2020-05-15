// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a fallingBlock, which is implemented by the underlying C# class `FallingBlock`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the fallingBlock
 * @example
 * // create a fallingBlock
 * const { Entity } = require('lucid-dream');
 * const fallingBlock = Entity.createFallingBlock({});
 * @returns {Entity} The new fallingBlock
 */
module.exports = function createFallingBlock(data = {}) {
	return new (require('../../class/Entity'))('fallingBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};