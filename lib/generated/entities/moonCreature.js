// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a moonCreature, which is implemented by the underlying C# class `MoonCreature`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the moonCreature
 * @example
 * // create a moonCreature
 * const { Entity } = require('lucid-dream');
 * const moonCreature = Entity.createMoonCreature({});
 * @returns {Entity} The new moonCreature
 */
module.exports = function createMoonCreature(data = {}) {
	return new (require('../../class/Entity'))('moonCreature', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};