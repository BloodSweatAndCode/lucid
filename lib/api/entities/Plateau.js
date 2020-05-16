const Entity = require('../Entity');

/**
 * Creates a plateau, which is implemented by the underlying C# class `Plateau`.
 * @class
 * @extends Entity
 */
class Plateau extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the plateau
	 */
	constructor(data = {}) {
		return new Entity('plateau', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Plateau;