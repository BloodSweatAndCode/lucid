const Entity = require('../Entity');

class BadelineBoost extends Entity {
	/**
	 * Creates an instance of {@link BadelineBoost}, which is implemented by the underlying C# class `BadelineBoost` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BadelineBoost} to be created
	 */
	constructor(data = {}) {
		return new Entity('badelineBoost', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BadelineBoost;