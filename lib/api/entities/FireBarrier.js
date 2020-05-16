const Entity = require('../Entity');

class FireBarrier extends Entity {
	/**
	 * Creates an instance of {@link FireBarrier}, which is implemented by the underlying C# class `FireBarrier` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link FireBarrier} to be created
	 */
	constructor(data = {}) {
		return new Entity('fireBarrier', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FireBarrier;