const Entity = require('../Entity');

class SpikesUp extends Entity {
	/**
	 * Creates an instance of {@link SpikesUp}, which is implemented by the underlying C# class `Spikes` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link SpikesUp} to be created
	 */
	constructor(data = {}) {
		return new Entity('spikesUp', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SpikesUp;