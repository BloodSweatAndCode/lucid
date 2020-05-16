const Entity = require('../Entity');

class ClutterCabinet extends Entity {
	/**
	 * Creates an instance of {@link ClutterCabinet}, which is implemented by the underlying C# class `ClutterCabinet` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link ClutterCabinet} to be created
	 */
	constructor(data = {}) {
		return new Entity('clutterCabinet', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ClutterCabinet;