const Entity = require('../Entity');

class SpikesLeft extends Entity {
	/**
	 * Creates an instance of {@link SpikesLeft}, which is implemented by the underlying C# class `Spikes` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link SpikesLeft} to be created
	 */
	constructor(data = {}) {
		return new Entity('spikesLeft', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SpikesLeft;