const Entity = require('../Entity');

class BounceBlock extends Entity {
	/**
	 * Creates an instance of {@link BounceBlock}, which is implemented by the underlying C# class `BounceBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BounceBlock} to be created
	 */
	constructor(data = {}, id) {
		super('bounceBlock', Object.assign({
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

module.exports = BounceBlock;