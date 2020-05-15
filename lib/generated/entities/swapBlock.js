// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a swapBlock, which is implemented by the underlying C# class .
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the swapBlock
 * @example
 * // create a swapBlock
 * const { Entity } = require('lucid-dream');
 * const swapBlock = Entity.createSwapBlock({});
 * @returns {Entity} The new swapBlock
 */
module.exports = function createSwapBlock(data = {}) {
	return new (require('../../class/Entity'))('swapBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};