// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a memorial, which is implemented by the underlying C# class `Memorial`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the memorial
 * @example
 * // create a memorial
 * const { Entity } = require('lucid-dream');
 * const memorial = Entity.createMemorial({});
 * @returns {Entity} The new memorial
 */
module.exports = function createMemorial(data = {}) {
	return new (require('../../class/Entity'))('memorial', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};