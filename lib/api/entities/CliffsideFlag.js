const Entity = require('../Entity');

class CliffsideFlag extends Entity {
	/**
	 * Creates an instance of {@link CliffsideFlag}, which is implemented by the underlying C# class `CliffsideWindFlag` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CliffsideFlag} to be created
	 */
	constructor(data = {}) {
		return new Entity('cliffside_flag', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CliffsideFlag;