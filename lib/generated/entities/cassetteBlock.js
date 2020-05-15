// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a cassetteBlock, which is implemented by the underlying C# classes `CassetteBlock`, `CassetteBlockManager`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the cassetteBlock
 * @example
 * // create a cassetteBlock
 * const { Entity } = require('lucid-dream');
 * const cassetteBlock = Entity.createCassetteBlock({});
 * @returns {Entity} The new cassetteBlock
 */
module.exports = function createCassetteBlock(data = {}) {
	return new (require('../../class/Entity'))('cassetteBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};