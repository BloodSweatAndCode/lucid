const Entity = require('../Entity');

class Waterfall extends Entity {
	/**
	 * Creates an instance of {@link Waterfall}, which is implemented by the underlying C# class `WaterFall` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Waterfall} to be created
	 */
	constructor(data = {}) {
		return new Entity('waterfall', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Waterfall;