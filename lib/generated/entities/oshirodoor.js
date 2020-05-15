// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a oshirodoor, which is implemented by the underlying C# class `MrOshiroDoor`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the oshirodoor
 * @example
 * // create a oshirodoor
 * const { Entity } = require('lucid-dream');
 * const oshirodoor = Entity.createOshirodoor({});
 * @returns {Entity} The new oshirodoor
 */
module.exports = function createOshirodoor(data = {}) {
	return new (require('../../class/Entity'))('oshirodoor', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};