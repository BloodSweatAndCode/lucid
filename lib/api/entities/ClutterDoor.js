const Entity = require('../Entity');

class ClutterDoor extends Entity {
	/**
	 * Creates an instance of {@link ClutterDoor}, which is implemented by the underlying C# class `ClutterDoor` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link ClutterDoor} to be created
	 */
	constructor(data = {}) {
		return new Entity('clutterDoor', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ClutterDoor;