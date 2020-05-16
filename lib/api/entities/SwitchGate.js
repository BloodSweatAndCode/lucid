const Entity = require('../Entity');

class SwitchGate extends Entity {
	/**
	 * Creates an instance of {@link SwitchGate}, which is implemented by the underlying C# class `SwitchGate` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link SwitchGate} to be created
	 */
	constructor(data = {}) {
		return new Entity('switchGate', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SwitchGate;