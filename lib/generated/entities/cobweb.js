// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a cobweb, which is implemented by the underlying C# class `Cobweb`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the cobweb
 * @example
 * // create a cobweb
 * const { Entity } = require('lucid-dream');
 * const cobweb = Entity.createCobweb({});
 * @returns {Entity} The new cobweb
 */
module.exports = function createCobweb(data = {}) {
	return new (require('../../class/Entity'))('cobweb', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};