// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a dreamHeartGem, which is implemented by the underlying C# class `DreamHeartGem`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the dreamHeartGem
 * @example
 * // create a dreamHeartGem
 * const { Entity } = require('lucid-dream');
 * const dreamHeartGem = Entity.createDreamHeartGem({});
 * @returns {Entity} The new dreamHeartGem
 */
module.exports = function createDreamHeartGem(data = {}) {
	return new (require('../../class/Entity'))('dreamHeartGem', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};