// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a infiniteStar, which is implemented by the underlying C# class `FlyFeather`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the infiniteStar
 * @example
 * // create a infiniteStar
 * const { Entity } = require('lucid-dream');
 * const infiniteStar = Entity.createInfiniteStar({});
 * @returns {Entity} The new infiniteStar
 */
module.exports = function createInfiniteStar(data = {}) {
	return new (require('../../class/Entity'))('infiniteStar', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};