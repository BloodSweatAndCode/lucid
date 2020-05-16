// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a bigWaterfall, which is implemented by the underlying C# class `BigWaterfall`.
 * @class
 * @extends Entity
 */
class BigWaterfall extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the bigWaterfall
	 */
	constructor(data = {}) {
		return new Entity('bigWaterfall', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BigWaterfall;