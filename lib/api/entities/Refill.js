// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a refill, which is implemented by the underlying C# class `Refill`.
 * @class
 * @extends Entity
 */
class Refill extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the refill
	 */
	constructor(data = {}) {
		return new Entity('refill', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Refill;