// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a water, which is implemented by the underlying C# class `Water`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the water
 * @example
 * // create a water
 * const { Entity } = require('lucid-dream');
 * const water = Entity.createWater({});
 * @returns {Entity} The new water
 */
module.exports = function createWater(data = {}) {
	return new (require('../../class/Entity'))('water', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};