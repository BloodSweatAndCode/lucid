// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a goldenBerry, which is implemented by the underlying C# class `Strawberry`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the goldenBerry
 * @example
 * // create a goldenBerry
 * const { Entity } = require('lucid-dream');
 * const goldenBerry = Entity.createGoldenBerry({});
 * @returns {Entity} The new goldenBerry
 */
module.exports = function createGoldenBerry(data = {}) {
	return new (require('../../class/Entity'))('goldenBerry', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};