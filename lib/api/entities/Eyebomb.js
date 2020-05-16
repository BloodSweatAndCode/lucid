const Entity = require('../Entity');

/**
 * Creates a eyebomb, which is implemented by the underlying C# class `Puffer`.
 * @class
 * @extends Entity
 */
class Eyebomb extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the eyebomb
	 */
	constructor(data = {}) {
		return new Entity('eyebomb', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Eyebomb;