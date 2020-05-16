const Entity = require('../Entity');

/**
 * Creates a door, which is implemented by the underlying C# class `Door`.
 * @class
 * @extends Entity
 */
class Door extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the door
	 */
	constructor(data = {}) {
		return new Entity('door', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Door;