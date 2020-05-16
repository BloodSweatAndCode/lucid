const Entity = require('../Entity');

class Cliffside_flag extends Entity {
	/**
	 * Creates an instance of {@link Cliffside_flag}, which is implemented by the underlying C# class `CliffsideWindFlag` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Cliffside_flag} to be created
	 */
	constructor(data = {}) {
		return new Entity('cliffside_flag', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Cliffside_flag;