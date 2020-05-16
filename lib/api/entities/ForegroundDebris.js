const Entity = require('../Entity');

class ForegroundDebris extends Entity {
	/**
	 * Creates an instance of {@link ForegroundDebris}, which is implemented by the underlying C# class `ForegroundDebris` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link ForegroundDebris} to be created
	 */
	constructor(data = {}) {
		return new Entity('foregroundDebris', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ForegroundDebris;