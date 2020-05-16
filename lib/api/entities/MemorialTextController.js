const Entity = require('../Entity');

class MemorialTextController extends Entity {
	/**
	 * Creates an instance of {@link MemorialTextController}, which is implemented by the underlying C# class `Strawberry` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link MemorialTextController} to be created
	 */
	constructor(data = {}) {
		return new Entity('memorialTextController', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = MemorialTextController;