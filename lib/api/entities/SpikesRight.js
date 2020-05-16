const Entity = require('../Entity');

class SpikesRight extends Entity {
	/**
	 * Creates an instance of {@link SpikesRight}, which is implemented by the underlying C# class `Spikes` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link SpikesRight} to be created
	 */
	constructor(data = {}) {
		return new Entity('spikesRight', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SpikesRight;