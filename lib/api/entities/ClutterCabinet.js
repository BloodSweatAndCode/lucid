const Entity = require('../Entity');

/**
 * Creates a clutterCabinet, which is implemented by the underlying C# class `ClutterCabinet`.
 * @class
 * @extends Entity
 */
class ClutterCabinet extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the clutterCabinet
	 */
	constructor(data = {}) {
		return new Entity('clutterCabinet', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ClutterCabinet;