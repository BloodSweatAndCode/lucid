// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a foregroundDebris, which is implemented by the underlying C# class `ForegroundDebris`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the foregroundDebris
 * @example
 * // create a foregroundDebris
 * const { Entity } = require('lucid-dream');
 * const foregroundDebris = Entity.createForegroundDebris({});
 * @returns {Entity} The new foregroundDebris
 */
module.exports = function createForegroundDebris(data = {}) {
	return new (require('../../class/Entity'))('foregroundDebris', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};