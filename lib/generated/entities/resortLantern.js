// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a resortLantern, which is implemented by the underlying C# class `ResortLantern`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the resortLantern
 * @example
 * // create a resortLantern
 * const { Entity } = require('lucid-dream');
 * const resortLantern = Entity.createResortLantern({});
 * @returns {Entity} The new resortLantern
 */
module.exports = function createResortLantern(data = {}) {
	return new (require('../../class/Entity'))('resortLantern', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};