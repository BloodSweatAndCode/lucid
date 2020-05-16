const Entity = require('../Entity');

/**
 * Creates a spikesDown, which is implemented by the underlying C# class `Spikes`.
 * @class
 * @extends Entity
 */
class SpikesDown extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the spikesDown
	 */
	constructor(data = {}) {
		return new Entity('spikesDown', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SpikesDown;