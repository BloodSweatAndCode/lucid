// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a eyebomb, which is implemented by the underlying C# class `Puffer`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the eyebomb
 * @example
 * // create a eyebomb
 * const { Entity } = require('lucid-dream');
 * const eyebomb = Entity.createEyebomb({});
 * @returns {Entity} The new eyebomb
 */
module.exports = function createEyebomb(data = {}) {
	return new (require('../../class/Entity'))('eyebomb', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};