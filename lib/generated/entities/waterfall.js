// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a waterfall, which is implemented by the underlying C# class `WaterFall`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the waterfall
 * @example
 * // create a waterfall
 * const { Entity } = require('lucid-dream');
 * const waterfall = Entity.createWaterfall({});
 * @returns {Entity} The new waterfall
 */
module.exports = function createWaterfall(data = {}) {
	return new (require('../../class/Entity'))('waterfall', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};