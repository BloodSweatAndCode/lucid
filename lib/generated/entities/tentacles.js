// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a tentacles, which is implemented by the underlying C# class `ReflectionTentacles`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the tentacles
 * @example
 * // create a tentacles
 * const { Entity } = require('lucid-dream');
 * const tentacles = Entity.createTentacles({});
 * @returns {Entity} The new tentacles
 */
module.exports = function createTentacles(data = {}) {
	return new (require('../../class/Entity'))('tentacles', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};