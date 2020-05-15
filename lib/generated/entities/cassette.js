// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a cassette, which is implemented by the underlying C# class `Cassette`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the cassette
 * @example
 * // create a cassette
 * const { Entity } = require('lucid-dream');
 * const cassette = Entity.createCassette({});
 * @returns {Entity} The new cassette
 */
module.exports = function createCassette(data = {}) {
	return new (require('../../class/Entity'))('cassette', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};