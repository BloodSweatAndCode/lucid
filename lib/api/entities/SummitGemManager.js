const Entity = require('../Entity');

class SummitGemManager extends Entity {
	/**
	 * Creates an instance of {@link SummitGemManager}, which is implemented by the underlying C# class `SummitGemManager` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link SummitGemManager} to be created
	 */
	constructor(data = {}) {
		return new Entity('summitGemManager', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SummitGemManager;