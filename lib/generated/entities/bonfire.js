// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a bonfire, which is implemented by the underlying C# class `Bonfire`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the bonfire
 * @example
 * // create a bonfire
 * const { Entity } = require('lucid-dream');
 * const bonfire = Entity.createBonfire({});
 * @returns {Entity} The new bonfire
 */
module.exports = function createBonfire(data = {}) {
	return new (require('../../class/Entity'))('bonfire', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};