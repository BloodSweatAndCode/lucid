// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a heartGemDoor, which is implemented by the underlying C# class `HeartGemDoor`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the heartGemDoor
 * @example
 * // create a heartGemDoor
 * const { Entity } = require('lucid-dream');
 * const heartGemDoor = Entity.createHeartGemDoor({});
 * @returns {Entity} The new heartGemDoor
 */
module.exports = function createHeartGemDoor(data = {}) {
	return new (require('../../class/Entity'))('heartGemDoor', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};