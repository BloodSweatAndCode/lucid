// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a negaBlock, which is implemented by the underlying C# class `NegaBlock`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the negaBlock
 * @example
 * // create a negaBlock
 * const { Entity } = require('lucid-dream');
 * const negaBlock = Entity.createNegaBlock({});
 * @returns {Entity} The new negaBlock
 */
module.exports = function createNegaBlock(data = {}) {
	return new (require('../../class/Entity'))('negaBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};