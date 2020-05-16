const Entity = require('../Entity');

class BridgeFixed extends Entity {
	/**
	 * Creates an instance of {@link BridgeFixed}, which is implemented by the underlying C# class `BridgeFixed` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BridgeFixed} to be created
	 */
	constructor(data = {}) {
		return new Entity('bridgeFixed', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BridgeFixed;