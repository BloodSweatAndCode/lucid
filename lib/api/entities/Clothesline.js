const Entity = require('../Entity');

/**
 * Creates a clothesline, which is implemented by the underlying C# class `Clothesline`.
 * @class
 * @extends Entity
 */
class Clothesline extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the clothesline
	 */
	constructor(data = {}) {
		return new Entity('clothesline', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Clothesline;