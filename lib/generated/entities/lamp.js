// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a lamp, which is implemented by the underlying C# class `Lamp`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the lamp
 * @example
 * // create a lamp
 * const { Entity } = require('lucid-dream');
 * const lamp = Entity.createLamp({});
 * @returns {Entity} The new lamp
 */
module.exports = function createLamp(data = {}) {
	return new (require('../../class/Entity'))('lamp', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};