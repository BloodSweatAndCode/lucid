const Entity = require('../Entity');

/**
 * Creates a bridge, which is implemented by the underlying C# class `Bridge`.
 * @class
 * @extends Entity
 */
class Bridge extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the bridge
	 */
	constructor(data = {}) {
		return new Entity('bridge', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Bridge;