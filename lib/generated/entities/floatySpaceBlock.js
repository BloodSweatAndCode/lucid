// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a floatySpaceBlock, which is implemented by the underlying C# class `FloatySpaceBlock`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the floatySpaceBlock
 * @example
 * // create a floatySpaceBlock
 * const { Entity } = require('lucid-dream');
 * const floatySpaceBlock = Entity.createFloatySpaceBlock({});
 * @returns {Entity} The new floatySpaceBlock
 */
module.exports = function createFloatySpaceBlock(data = {}) {
	return new (require('../../class/Entity'))('floatySpaceBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};