// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a risingLava, which is implemented by the underlying C# class `RisingLava`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the risingLava
 * @example
 * // create a risingLava
 * const { Entity } = require('lucid-dream');
 * const risingLava = Entity.createRisingLava({});
 * @returns {Entity} The new risingLava
 */
module.exports = function createRisingLava(data = {}) {
	return new (require('../../class/Entity'))('risingLava', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};