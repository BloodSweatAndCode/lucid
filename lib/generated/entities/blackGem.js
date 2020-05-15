// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a blackGem, which is implemented by the underlying C# class `HeartGem`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the blackGem
 * @example
 * // create a blackGem
 * const { Entity } = require('lucid-dream');
 * const blackGem = Entity.createBlackGem({});
 * @returns {Entity} The new blackGem
 */
module.exports = function createBlackGem(data = {}) {
	return new (require('../../class/Entity'))('blackGem', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};