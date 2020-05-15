// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a booster, which is implemented by the underlying C# class `Booster`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the booster
 * @example
 * // create a booster
 * const { Entity } = require('lucid-dream');
 * const booster = Entity.createBooster({});
 * @returns {Entity} The new booster
 */
module.exports = function createBooster(data = {}) {
	return new (require('../../class/Entity'))('booster', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};