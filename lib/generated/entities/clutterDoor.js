// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a clutterDoor, which is implemented by the underlying C# class `ClutterDoor`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the clutterDoor
 * @example
 * // create a clutterDoor
 * const { Entity } = require('lucid-dream');
 * const clutterDoor = Entity.createClutterDoor({});
 * @returns {Entity} The new clutterDoor
 */
module.exports = function createClutterDoor(data = {}) {
	return new (require('../../class/Entity'))('clutterDoor', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};