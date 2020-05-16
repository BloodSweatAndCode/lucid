const Entity = require('../Entity');

class GoldenBerry extends Entity {
	/**
	 * Creates an instance of {@link GoldenBerry}, which is implemented by the underlying C# class `Strawberry` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link GoldenBerry} to be created
	 */
	constructor(data = {}) {
		return new Entity('goldenBerry', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = GoldenBerry;