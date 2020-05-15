// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a lightningBlock, which is implemented by the underlying C# class `LightningBreakerBox`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the lightningBlock
 * @example
 * // create a lightningBlock
 * const { Entity } = require('lucid-dream');
 * const lightningBlock = Entity.createLightningBlock({});
 * @returns {Entity} The new lightningBlock
 */
module.exports = function createLightningBlock(data = {}) {
	return new (require('../../class/Entity'))('lightningBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};