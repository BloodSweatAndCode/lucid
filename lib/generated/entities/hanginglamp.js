// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a hanginglamp, which is implemented by the underlying C# class `HangingLamp`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the hanginglamp
 * @example
 * // create a hanginglamp
 * const { Entity } = require('lucid-dream');
 * const hanginglamp = Entity.createHanginglamp({});
 * @returns {Entity} The new hanginglamp
 */
module.exports = function createHanginglamp(data = {}) {
	return new (require('../../class/Entity'))('hanginglamp', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};