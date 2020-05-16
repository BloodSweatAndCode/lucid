const Entity = require('../Entity');

class Summitcloud extends Entity {
	/**
	 * Creates an instance of {@link Summitcloud}, which is implemented by the underlying C# class `SummitCloud` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Summitcloud} to be created
	 */
	constructor(data = {}) {
		return new Entity('summitcloud', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Summitcloud;