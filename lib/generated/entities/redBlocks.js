// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a redBlocks, which is implemented by the underlying C# class .
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the redBlocks
 * @example
 * // create a redBlocks
 * const { Entity } = require('lucid-dream');
 * const redBlocks = Entity.createRedBlocks({});
 * @returns {Entity} The new redBlocks
 */
module.exports = function createRedBlocks(data = {}) {
	return new (require('../../class/Entity'))('redBlocks', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};