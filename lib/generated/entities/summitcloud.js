// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a summitcloud, which is implemented by the underlying C# class `SummitCloud`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the summitcloud
 * @example
 * // create a summitcloud
 * const { Entity } = require('lucid-dream');
 * const summitcloud = Entity.createSummitcloud({});
 * @returns {Entity} The new summitcloud
 */
module.exports = function createSummitcloud(data = {}) {
	return new (require('../../class/Entity'))('summitcloud', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};