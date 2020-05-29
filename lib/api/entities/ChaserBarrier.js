const Entity = require('../Entity');

class ChaserBarrier extends Entity {
	/**
	 * Creates an instance of {@link ChaserBarrier}, which is implemented by the underlying C# class `ChaserBarrier` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link ChaserBarrier} to be created
	 */
	constructor(data = {}, id) {
		super('chaserBarrier', Object.assign({
			x: 0,
			y: 0,
			width: Entity.defaultBlockWidth,
			height: Entity.defaultBlockHeight
		}, data), id);
	}

	draw() {
		throw new Error('not yet implemented');
	}
}

module.exports = ChaserBarrier;