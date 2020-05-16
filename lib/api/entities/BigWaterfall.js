const Entity = require('../Entity');

class BigWaterfall extends Entity {
	/**
	 * Creates an instance of {@link BigWaterfall}, which is implemented by the underlying C# class `BigWaterfall` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BigWaterfall} to be created
	 */
	constructor(data = {}) {
		return new Entity('bigWaterfall', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BigWaterfall;