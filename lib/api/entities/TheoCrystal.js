const Entity = require('../Entity');

/**
 * Creates a theoCrystal, which is implemented by the underlying C# class `TheoCrystal`.
 * @class
 * @extends Entity
 */
class TheoCrystal extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the theoCrystal
	 */
	constructor(data = {}) {
		return new Entity('theoCrystal', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TheoCrystal;