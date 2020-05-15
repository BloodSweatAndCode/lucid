// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a summitgem, which is implemented by the underlying C# class `SummitGem`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the summitgem
 * @example
 * // create a summitgem
 * const { Entity } = require('lucid-dream');
 * const summitgem = Entity.createSummitgem({});
 * @returns {Entity} The new summitgem
 */
module.exports = function createSummitgem(data = {}) {
	return new (require('../../class/Entity'))('summitgem', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};