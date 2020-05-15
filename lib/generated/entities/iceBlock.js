// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a iceBlock, which is implemented by the underlying C# class `IceBlock`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the iceBlock
 * @example
 * // create a iceBlock
 * const { Entity } = require('lucid-dream');
 * const iceBlock = Entity.createIceBlock({});
 * @returns {Entity} The new iceBlock
 */
module.exports = function createIceBlock(data = {}) {
	return new (require('../../class/Entity'))('iceBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};