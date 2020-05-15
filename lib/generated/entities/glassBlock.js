// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a glassBlock, which is implemented by the underlying C# class `GlassBlock`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the glassBlock
 * @example
 * // create a glassBlock
 * const { Entity } = require('lucid-dream');
 * const glassBlock = Entity.createGlassBlock({});
 * @returns {Entity} The new glassBlock
 */
module.exports = function createGlassBlock(data = {}) {
	return new (require('../../class/Entity'))('glassBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};