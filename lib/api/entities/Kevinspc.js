const Entity = require('../Entity');

class Kevins_pc extends Entity {
	/**
	 * Creates an instance of {@link Kevins_pc}, which is implemented by the underlying C# class `KevinsPC` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Kevins_pc} to be created
	 */
	constructor(data = {}) {
		return new Entity('kevins_pc', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Kevins_pc;