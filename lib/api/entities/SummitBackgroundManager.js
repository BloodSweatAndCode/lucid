const Entity = require('../Entity');

class SummitBackgroundManager extends Entity {
	/**
	 * Creates an instance of {@link SummitBackgroundManager}, which is implemented by the underlying C# class `AscendManager` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link SummitBackgroundManager} to be created
	 */
	constructor(data = {}) {
		return new Entity('SummitBackgroundManager', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SummitBackgroundManager;