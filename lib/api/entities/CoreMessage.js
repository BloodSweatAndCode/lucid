// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a coreMessage, which is implemented by the underlying C# class `CoreMessage`.
 * @class
 * @extends Entity
 */
class CoreMessage extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the coreMessage
	 */
	constructor(data = {}) {
		return new Entity('coreMessage', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CoreMessage;