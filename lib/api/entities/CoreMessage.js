const Entity = require('../Entity');

class CoreMessage extends Entity {
	/**
	 * Creates an instance of {@link CoreMessage}, which is implemented by the underlying C# class `CoreMessage` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CoreMessage} to be created
	 */
	constructor(data = {}) {
		return new Entity('coreMessage', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CoreMessage;