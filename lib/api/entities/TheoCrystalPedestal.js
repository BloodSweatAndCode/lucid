const Entity = require('../Entity');

/**
 * Creates a theoCrystalPedestal, which is implemented by the underlying C# class `TheoCrystalPedestal`.
 * @class
 * @extends Entity
 */
class TheoCrystalPedestal extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the theoCrystalPedestal
	 */
	constructor(data = {}) {
		return new Entity('theoCrystalPedestal', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TheoCrystalPedestal;