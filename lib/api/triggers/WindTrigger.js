const Entity = require('../Entity');

class WindTrigger extends Entity {
	/**
	 * Creates an instance of {@link WindTrigger}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link WindTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('windTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = WindTrigger;