const Entity = require('../Entity');

class KevinsPc extends Entity {
	/**
	 * Creates an instance of {@link KevinsPc}, which is implemented by the underlying C# class `KevinsPC` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link KevinsPc} to be created
	 */
	constructor(data = {}) {
		return new Entity('kevins_pc', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = KevinsPc;