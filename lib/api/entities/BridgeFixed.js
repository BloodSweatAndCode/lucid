const Entity = require('../Entity');

/**
 * Creates a bridgeFixed, which is implemented by the underlying C# class `BridgeFixed`.
 * @class
 * @extends Entity
 */
class BridgeFixed extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the bridgeFixed
	 */
	constructor(data = {}) {
		return new Entity('bridgeFixed', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BridgeFixed;