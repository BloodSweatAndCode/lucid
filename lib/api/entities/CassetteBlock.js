const Entity = require('../Entity');

class CassetteBlock extends Entity {
	/**
	 * Creates an instance of {@link CassetteBlock}, which is implemented by the underlying C# classes `CassetteBlock`, `CassetteBlockManager` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CassetteBlock} to be created
	 */
	constructor(data = {}, id) {
		super('cassetteBlock', Object.assign({
			x: 0,
			y: 0,
			width: Entity.defaultBlockWidth,
			height: Entity.defaultBlockHeight,
			index: 0,
			tempo: 1.0
		}, data), id);
	}

	draw() {
		throw new Error('not yet implemented');
	}
}

CassetteBlock.colors = [
	'Blue',
	'Rose',
	'Bright Sun',
	'Malachite'
];

module.exports = CassetteBlock;