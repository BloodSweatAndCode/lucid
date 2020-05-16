const Entity = require('../Entity');

/**
 * Creates a clutterDoor, which is implemented by the underlying C# class `ClutterDoor`.
 * @class
 * @extends Entity
 */
class ClutterDoor extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the clutterDoor
	 */
	constructor(data = {}) {
		return new Entity('clutterDoor', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ClutterDoor;