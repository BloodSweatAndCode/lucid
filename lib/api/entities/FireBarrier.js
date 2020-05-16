// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a fireBarrier, which is implemented by the underlying C# class `FireBarrier`.
 * @class
 * @extends Entity
 */
class FireBarrier extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the fireBarrier
	 */
	constructor(data = {}) {
		return new Entity('fireBarrier', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FireBarrier;