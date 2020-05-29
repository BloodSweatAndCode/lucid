const Entity = require('../Entity');

class BridgeFixed extends Entity {
	/**
	 * Creates an instance of {@link BridgeFixed}, which is implemented by the underlying C# class `BridgeFixed` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BridgeFixed} to be created
	 */
	constructor(data = {}, id) {
		super('bridgeFixed', Object.assign({
			x: 0,
			y: 0,
			width: 32
		}, data), id);
	}

	draw() {
		throw new Error('not yet implemented');
	}
}

BridgeFixed.sprite = {
	path: 'scenery/bridge',
	rx: 0,
	ry: 0
};

module.exports = BridgeFixed;