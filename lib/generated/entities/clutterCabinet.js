// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a clutterCabinet, which is implemented by the underlying C# class `ClutterCabinet`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the clutterCabinet
 * @example
 * // create a clutterCabinet
 * const { Entity } = require('lucid-dream');
 * const clutterCabinet = Entity.createClutterCabinet({});
 * @returns {Entity} The new clutterCabinet
 */
module.exports = function createClutterCabinet(data = {}) {
	return new (require('../../class/Entity'))('clutterCabinet', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};