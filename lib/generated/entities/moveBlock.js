// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a moveBlock, which is implemented by the underlying C# class `MoveBlock`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the moveBlock
 * @example
 * // create a moveBlock
 * const { Entity } = require('lucid-dream');
 * const moveBlock = Entity.createMoveBlock({});
 * @returns {Entity} The new moveBlock
 */
module.exports = function createMoveBlock(data = {}) {
	return new (require('../../class/Entity'))('moveBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};