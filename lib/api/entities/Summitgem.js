const Entity = require('../Entity');

class Summitgem extends Entity {
	/**
	 * Creates an instance of {@link Summitgem}, which is implemented by the underlying C# class `SummitGem` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Summitgem} to be created
	 */
	constructor(data = {}) {
		return new Entity('summitgem', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Summitgem;