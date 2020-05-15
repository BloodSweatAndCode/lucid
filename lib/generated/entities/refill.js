// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a refill, which is implemented by the underlying C# class `Refill`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the refill
 * @example
 * // create a refill
 * const { Entity } = require('lucid-dream');
 * const refill = Entity.createRefill({});
 * @returns {Entity} The new refill
 */
module.exports = function createRefill(data = {}) {
	return new (require('../../class/Entity'))('refill', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};