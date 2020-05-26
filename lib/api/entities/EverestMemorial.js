const Entity = require('../Entity');

class EverestMemorial extends Entity {
	/**
	 * Creates an instance of {@link EverestMemorial}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link EverestMemorial} to be created
	 */
	constructor(data = {}) {
		return new Entity('everestMemorial', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = EverestMemorial;