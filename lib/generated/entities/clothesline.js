// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a clothesline, which is implemented by the underlying C# class `Clothesline`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the clothesline
 * @example
 * // create a clothesline
 * const { Entity } = require('lucid-dream');
 * const clothesline = Entity.createClothesline({});
 * @returns {Entity} The new clothesline
 */
module.exports = function createClothesline(data = {}) {
	return new (require('../../class/Entity'))('clothesline', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};