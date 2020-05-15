// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a bridge, which is implemented by the underlying C# class `Bridge`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the bridge
 * @example
 * // create a bridge
 * const { Entity } = require('lucid-dream');
 * const bridge = Entity.createBridge({});
 * @returns {Entity} The new bridge
 */
module.exports = function createBridge(data = {}) {
	return new (require('../../class/Entity'))('bridge', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};