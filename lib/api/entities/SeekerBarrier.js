const Entity = require('../Entity');

class SeekerBarrier extends Entity {
	/**
	 * Creates an instance of {@link SeekerBarrier}, which is implemented by the underlying C# class `SeekerBarrier` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link SeekerBarrier} to be created
	 */
	constructor(data = {}) {
		return new Entity('seekerBarrier', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SeekerBarrier;