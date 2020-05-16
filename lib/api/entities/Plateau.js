const Entity = require('../Entity');

class Plateau extends Entity {
	/**
	 * Creates an instance of {@link Plateau}, which is implemented by the underlying C# class `Plateau` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Plateau} to be created
	 */
	constructor(data = {}) {
		return new Entity('plateau', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Plateau;