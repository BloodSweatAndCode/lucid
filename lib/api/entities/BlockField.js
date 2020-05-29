const Entity = require('../Entity');

class BlockField extends Entity {
	/**
	 * Creates an instance of {@link BlockField}, which is implemented by the underlying C# class `BlockField` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BlockField} to be created
	 */
	constructor(data = {}, id) {
		super('blockField', Object.assign({
			x: 0,
			y: 0,
			width: Entity.defaultBlockWidth,
			height: Entity.defaultBlockHeight
		}, data), id);
	}

	draw(ctx, imgData, room) {
		throw new Error('not implemented');
	}
}

module.exports = BlockField;