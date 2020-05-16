// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a spikesUp, which is implemented by the underlying C# class `Spikes`.
 * @class
 * @extends Entity
 */
class SpikesUp extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the spikesUp
	 */
	constructor(data = {}) {
		return new Entity('spikesUp', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SpikesUp;