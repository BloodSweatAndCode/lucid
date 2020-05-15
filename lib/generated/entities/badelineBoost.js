// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a badelineBoost, which is implemented by the underlying C# class `BadelineBoost`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the badelineBoost
 * @example
 * // create a badelineBoost
 * const { Entity } = require('lucid-dream');
 * const badelineBoost = Entity.createBadelineBoost({});
 * @returns {Entity} The new badelineBoost
 */
module.exports = function createBadelineBoost(data = {}) {
	return new (require('../../class/Entity'))('badelineBoost', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};