const Entity = require('../Entity');

/**
 * Creates a moonCreature, which is implemented by the underlying C# class `MoonCreature`.
 * @class
 * @extends Entity
 */
class MoonCreature extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the moonCreature
	 */
	constructor(data = {}) {
		return new Entity('moonCreature', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = MoonCreature;