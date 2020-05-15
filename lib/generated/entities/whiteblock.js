// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a whiteblock, which is implemented by the underlying C# class `WhiteBlock`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the whiteblock
 * @example
 * // create a whiteblock
 * const { Entity } = require('lucid-dream');
 * const whiteblock = Entity.createWhiteblock({});
 * @returns {Entity} The new whiteblock
 */
module.exports = function createWhiteblock(data = {}) {
	return new (require('../../class/Entity'))('whiteblock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};