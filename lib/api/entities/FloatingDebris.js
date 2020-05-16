const Entity = require('../Entity');

class FloatingDebris extends Entity {
	/**
	 * Creates an instance of {@link FloatingDebris}, which is implemented by the underlying C# class `FloatingDebris` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link FloatingDebris} to be created
	 */
	constructor(data = {}) {
		return new Entity('floatingDebris', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FloatingDebris;