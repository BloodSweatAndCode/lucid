// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a cliffflag, which is implemented by the underlying C# class `CliffFlags`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the cliffflag
 * @example
 * // create a cliffflag
 * const { Entity } = require('lucid-dream');
 * const cliffflag = Entity.createCliffflag({});
 * @returns {Entity} The new cliffflag
 */
module.exports = function createCliffflag(data = {}) {
	return new (require('../../class/Entity'))('cliffflag', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};