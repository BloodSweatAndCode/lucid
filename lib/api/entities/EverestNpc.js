const Entity = require('../Entity');

class EverestNpc extends Entity {
	/**
	 * Creates an instance of {@link EverestNpc}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link EverestNpc} to be created
	 */
	constructor(data = {}) {
		return new Entity('everestNpc', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = EverestNpc;