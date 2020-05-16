const Entity = require('../Entity');

/**
 * Creates a goldenBerry, which is implemented by the underlying C# class `Strawberry`.
 * @class
 * @extends Entity
 */
class GoldenBerry extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the goldenBerry
	 */
	constructor(data = {}) {
		return new Entity('goldenBerry', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = GoldenBerry;