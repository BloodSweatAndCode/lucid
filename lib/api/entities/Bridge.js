const Entity = require('../Entity');

class Bridge extends Entity {
	/**
	 * Creates an instance of {@link Bridge}, which is implemented by the underlying C# class `Bridge` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Bridge} to be created
	 */
	constructor(data = {}) {
		return new Entity('bridge', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Bridge;