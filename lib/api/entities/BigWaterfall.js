const Entity = require('../Entity');

class BigWaterfall extends Entity {
	/**
	 * Creates an instance of {@link BigWaterfall}, which is implemented by the underlying C# class `BigWaterfall` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BigWaterfall} to be created
	 * @param {Number} [data.x=0] - x position
	 * @param {Number} [data.y=0] - y position
	 * @param {Number} [data.width=16] - width of the waterfall
	 * @param {Number} [data.height=64] - height of the waterfall
	 * @param {String} [data.layer='FG'] - layer that the waterfall resides on
	 * @param {Number} [id] - unique id of the entity
	 */
	constructor(data = {}, id) {
		super('bigWaterfall', Object.assign({
			x: 0,
			y: 0,
			width: 16,
			height: 64,
			layer: 'FG'
		}, data), id);
	}

	draw(ctx, imgData, room) {
		throw new Error('not implemented');
	}
}

module.exports = BigWaterfall;