const Entity = require('../Entity');

/**
 * Creates a ridgeGate, which is implemented by the underlying C# class `RidgeGate`.
 * @class
 * @extends Entity
 */
class RidgeGate extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the ridgeGate
	 */
	constructor(data = {}) {
		return new Entity('ridgeGate', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = RidgeGate;