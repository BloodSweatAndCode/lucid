// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a switchGate, which is implemented by the underlying C# class `SwitchGate`.
 * @class
 * @extends Entity
 */
class SwitchGate extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the switchGate
	 */
	constructor(data = {}) {
		return new Entity('switchGate', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SwitchGate;