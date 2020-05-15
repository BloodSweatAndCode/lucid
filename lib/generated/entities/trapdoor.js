// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a trapdoor, which is implemented by the underlying C# class `Trapdoor`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the trapdoor
 * @example
 * // create a trapdoor
 * const { Entity } = require('lucid-dream');
 * const trapdoor = Entity.createTrapdoor({});
 * @returns {Entity} The new trapdoor
 */
module.exports = function createTrapdoor(data = {}) {
	return new (require('../../class/Entity'))('trapdoor', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};