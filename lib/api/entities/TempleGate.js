const Entity = require('../Entity');

/**
 * Creates a templeGate, which is implemented by the underlying C# class `TempleGate`.
 * @class
 * @extends Entity
 */
class TempleGate extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the templeGate
	 */
	constructor(data = {}) {
		return new Entity('templeGate', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TempleGate;