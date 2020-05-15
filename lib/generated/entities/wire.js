// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a wire, which is implemented by the underlying C# class `Wire`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the wire
 * @example
 * // create a wire
 * const { Entity } = require('lucid-dream');
 * const wire = Entity.createWire({});
 * @returns {Entity} The new wire
 */
module.exports = function createWire(data = {}) {
	return new (require('../../class/Entity'))('wire', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};