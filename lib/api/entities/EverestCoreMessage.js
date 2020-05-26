const Entity = require('../Entity');

class EverestCoreMessage extends Entity {
	/**
	 * Creates an instance of {@link EverestCoreMessage}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link EverestCoreMessage} to be created
	 */
	constructor(data = {}) {
		return new Entity('everestCoreMessage', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = EverestCoreMessage;