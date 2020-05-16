const Entity = require('../Entity');

class TempleBigEyeball extends Entity {
	/**
	 * Creates an instance of {@link TempleBigEyeball}, which is implemented by the underlying C# class `TempleBigEyeball` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TempleBigEyeball} to be created
	 */
	constructor(data = {}) {
		return new Entity('templeBigEyeball', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TempleBigEyeball;