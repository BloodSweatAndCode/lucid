// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a water, which is implemented by the underlying C# class `Water`.
 * @class
 * @extends Entity
 */
class Water extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the water
	 */
	constructor(data = {}) {
		return new Entity('water', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Water;