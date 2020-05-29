const Entity = require('../Entity');

class Bridge extends Entity {
	/**
	 * Creates an instance of {@link Bridge}, which is implemented by the underlying C# class `Bridge` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Bridge} to be created
	 */
	constructor(data = {}, id) {
		const x = data.x || 0;
		const y = data.y || 0;
		const width = data.width || 32;
		const gapStartX = x + 96;
		const gapStopX = x + 128;
		const nodes = [];
		super('bridge', Object.assign({ x, y, width, gapStartX, gapStopX, nodes }, data), id);
	}

	draw() {
		throw new Error('not yet implemented');
	}
}

Bridge.sprite = {
	path: 'scenery/bridge'
};

module.exports = Bridge;