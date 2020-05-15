// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a bigWaterfall, which is implemented by the underlying C# class `BigWaterfall`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the bigWaterfall
 * @example
 * // create a bigWaterfall
 * const { Entity } = require('lucid-dream');
 * const bigWaterfall = Entity.createBigWaterfall({});
 * @returns {Entity} The new bigWaterfall
 */
module.exports = function createBigWaterfall(data = {}) {
	return new (require('../../class/Entity'))('bigWaterfall', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};