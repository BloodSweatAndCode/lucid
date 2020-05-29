const Entity = require('../Entity');

class BirdForsakenCityGem extends Entity {
	/**
	 * Creates an instance of {@link BirdForsakenCityGem}, which is implemented by the underlying C# class `ForsakenCitySatellite` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BirdForsakenCityGem} to be created
	 */
	constructor(data = {}, id) {
		const x = data.x || 0;
		const y = data.y || 0;
		const birdX = data.birdX || x + 64;
		const birdY = y;
		const gemX = data.gemX || x + 48;
		const gemY = data.gemY || y;
		const nodes = data.nodes || [];
		super('birdForsakenCityGem', { x, y, birdX, birdY, gemX, gemY, nodes }, id);
	}
}

BirdForsakenCityGem.sprite = {
	path: 'scenery/flutterbird/idle00.png',
	ry: 1
};

module.exports = BirdForsakenCityGem;