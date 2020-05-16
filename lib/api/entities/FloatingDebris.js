const Entity = require('../Entity');

/**
 * Creates a floatingDebris, which is implemented by the underlying C# class `FloatingDebris`.
 * @class
 * @extends Entity
 */
class FloatingDebris extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the floatingDebris
	 */
	constructor(data = {}) {
		return new Entity('floatingDebris', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FloatingDebris;