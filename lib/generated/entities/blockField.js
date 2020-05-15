// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a blockField, which is implemented by the underlying C# class `BlockField`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the blockField
 * @example
 * // create a blockField
 * const { Entity } = require('lucid-dream');
 * const blockField = Entity.createBlockField({});
 * @returns {Entity} The new blockField
 */
module.exports = function createBlockField(data = {}) {
	return new (require('../../class/Entity'))('blockField', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};