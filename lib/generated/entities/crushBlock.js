// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a crushBlock, which is implemented by the underlying C# class `CrushBlock`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the crushBlock
 * @example
 * // create a crushBlock
 * const { Entity } = require('lucid-dream');
 * const crushBlock = Entity.createCrushBlock({});
 * @returns {Entity} The new crushBlock
 */
module.exports = function createCrushBlock(data = {}) {
	return new (require('../../class/Entity'))('crushBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};