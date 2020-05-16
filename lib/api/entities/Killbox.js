const Entity = require('../Entity');

class Killbox extends Entity {
	/**
	 * Creates an instance of {@link Killbox}, which is implemented by the underlying C# class `Killbox` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Killbox} to be created
	 */
	constructor(data = {}) {
		return new Entity('killbox', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Killbox;