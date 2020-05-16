const Entity = require('../Entity');

class RidgeGate extends Entity {
	/**
	 * Creates an instance of {@link RidgeGate}, which is implemented by the underlying C# class `RidgeGate` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link RidgeGate} to be created
	 */
	constructor(data = {}) {
		return new Entity('ridgeGate', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = RidgeGate;