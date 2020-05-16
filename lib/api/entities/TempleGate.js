const Entity = require('../Entity');

class TempleGate extends Entity {
	/**
	 * Creates an instance of {@link TempleGate}, which is implemented by the underlying C# class `TempleGate` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TempleGate} to be created
	 */
	constructor(data = {}) {
		return new Entity('templeGate', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TempleGate;