const Entity = require('../Entity');

class ResortLantern extends Entity {
	/**
	 * Creates an instance of {@link ResortLantern}, which is implemented by the underlying C# class `ResortLantern` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link ResortLantern} to be created
	 */
	constructor(data = {}) {
		return new Entity('resortLantern', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ResortLantern;