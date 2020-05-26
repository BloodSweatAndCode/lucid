const Entity = require('../Entity');

class CustomNpc extends Entity {
	/**
	 * Creates an instance of {@link CustomNpc}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CustomNpc} to be created
	 */
	constructor(data = {}) {
		return new Entity('customNpc', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CustomNpc;