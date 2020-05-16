const Entity = require('../Entity');

class TheoCrystalPedestal extends Entity {
	/**
	 * Creates an instance of {@link TheoCrystalPedestal}, which is implemented by the underlying C# class `TheoCrystalPedestal` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TheoCrystalPedestal} to be created
	 */
	constructor(data = {}) {
		return new Entity('theoCrystalPedestal', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TheoCrystalPedestal;