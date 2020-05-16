const Entity = require('../Entity');

class SpikesDown extends Entity {
	/**
	 * Creates an instance of {@link SpikesDown}, which is implemented by the underlying C# class `Spikes` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link SpikesDown} to be created
	 */
	constructor(data = {}) {
		return new Entity('spikesDown', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SpikesDown;