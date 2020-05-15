// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a crumbleBlock, which is implemented by the underlying C# class `CrumblePlatform`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the crumbleBlock
 * @example
 * // create a crumbleBlock
 * const { Entity } = require('lucid-dream');
 * const crumbleBlock = Entity.createCrumbleBlock({});
 * @returns {Entity} The new crumbleBlock
 */
module.exports = function createCrumbleBlock(data = {}) {
	return new (require('../../class/Entity'))('crumbleBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};