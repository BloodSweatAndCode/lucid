// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a door, which is implemented by the underlying C# class `Door`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the door
 * @example
 * // create a door
 * const { Entity } = require('lucid-dream');
 * const door = Entity.createDoor({});
 * @returns {Entity} The new door
 */
module.exports = function createDoor(data = {}) {
	return new (require('../../class/Entity'))('door', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};