const Entity = require('../Entity');

class CustomCoreMessage extends Entity {
	/**
	 * Creates an instance of {@link CustomCoreMessage}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CustomCoreMessage} to be created
	 */
	constructor(data = {}) {
		return new Entity('customCoreMessage', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CustomCoreMessage;