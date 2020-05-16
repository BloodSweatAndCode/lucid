const Entity = require('../Entity');

class ChaserBarrier extends Entity {
	/**
	 * Creates an instance of {@link ChaserBarrier}, which is implemented by the underlying C# class `ChaserBarrier` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link ChaserBarrier} to be created
	 */
	constructor(data = {}) {
		return new Entity('chaserBarrier', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ChaserBarrier;