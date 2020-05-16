// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a lamp, which is implemented by the underlying C# class `Lamp`.
 * @class
 * @extends Entity
 */
class Lamp extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the lamp
	 */
	constructor(data = {}) {
		return new Entity('lamp', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Lamp;