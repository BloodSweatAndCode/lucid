// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a goldenBlock, which is implemented by the underlying C# class `GoldenBlock`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the goldenBlock
 * @example
 * // create a goldenBlock
 * const { Entity } = require('lucid-dream');
 * const goldenBlock = Entity.createGoldenBlock({});
 * @returns {Entity} The new goldenBlock
 */
module.exports = function createGoldenBlock(data = {}) {
	return new (require('../../class/Entity'))('goldenBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};