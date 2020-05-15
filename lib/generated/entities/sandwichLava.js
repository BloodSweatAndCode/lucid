// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a sandwichLava, which is implemented by the underlying C# class `SandwichLava`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the sandwichLava
 * @example
 * // create a sandwichLava
 * const { Entity } = require('lucid-dream');
 * const sandwichLava = Entity.createSandwichLava({});
 * @returns {Entity} The new sandwichLava
 */
module.exports = function createSandwichLava(data = {}) {
	return new (require('../../class/Entity'))('sandwichLava', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};