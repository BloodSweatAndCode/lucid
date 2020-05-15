// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a bounceBlock, which is implemented by the underlying C# class `BounceBlock`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the bounceBlock
 * @example
 * // create a bounceBlock
 * const { Entity } = require('lucid-dream');
 * const bounceBlock = Entity.createBounceBlock({});
 * @returns {Entity} The new bounceBlock
 */
module.exports = function createBounceBlock(data = {}) {
	return new (require('../../class/Entity'))('bounceBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};