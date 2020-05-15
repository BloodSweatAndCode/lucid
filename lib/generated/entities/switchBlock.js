// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a switchBlock, which is implemented by the underlying C# class `SwapBlock`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the switchBlock
 * @example
 * // create a switchBlock
 * const { Entity } = require('lucid-dream');
 * const switchBlock = Entity.createSwitchBlock({});
 * @returns {Entity} The new switchBlock
 */
module.exports = function createSwitchBlock(data = {}) {
	return new (require('../../class/Entity'))('switchBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};