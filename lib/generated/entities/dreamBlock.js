// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a dreamBlock, which is implemented by the underlying C# class `DreamBlock`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the dreamBlock
 * @example
 * // create a dreamBlock
 * const { Entity } = require('lucid-dream');
 * const dreamBlock = Entity.createDreamBlock({});
 * @returns {Entity} The new dreamBlock
 */
module.exports = function createDreamBlock(data = {}) {
	return new (require('../../class/Entity'))('dreamBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};