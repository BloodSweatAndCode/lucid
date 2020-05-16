const Entity = require('../Entity');

/**
 * Creates a kevins_pc, which is implemented by the underlying C# class `KevinsPC`.
 * @class
 * @extends Entity
 */
class Kevins_pc extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the kevins_pc
	 */
	constructor(data = {}) {
		return new Entity('kevins_pc', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Kevins_pc;