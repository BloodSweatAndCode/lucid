// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a waterfall, which is implemented by the underlying C# class `WaterFall`.
 * @class
 * @extends Entity
 */
class Waterfall extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the waterfall
	 */
	constructor(data = {}) {
		return new Entity('waterfall', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Waterfall;