const Entity = require('../Entity');

class Cliffflag extends Entity {
	/**
	 * Creates an instance of {@link Cliffflag}, which is implemented by the underlying C# class `CliffFlags` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Cliffflag} to be created
	 */
	constructor(data = {}) {
		return new Entity('cliffflag', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Cliffflag;