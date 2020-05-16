const Entity = require('../Entity');

/**
 * Creates a cliffside_flag, which is implemented by the underlying C# class `CliffsideWindFlag`.
 * @class
 * @extends Entity
 */
class Cliffside_flag extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the cliffside_flag
	 */
	constructor(data = {}) {
		return new Entity('cliffside_flag', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Cliffside_flag;