// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a key, which is implemented by the underlying C# class `Key`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the key
 * @example
 * // create a key
 * const { Entity } = require('lucid-dream');
 * const key = Entity.createKey({});
 * @returns {Entity} The new key
 */
module.exports = function createKey(data = {}) {
	return new (require('../../class/Entity'))('key', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};