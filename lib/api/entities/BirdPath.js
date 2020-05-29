const Entity = require('../Entity');

class BirdPath extends Entity {
	/**
	 * Creates an instance of {@link BirdPath}, which is implemented by the underlying C# class `BirdPath` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BirdPath} to be created
	 */
	constructor(data = {}, id) {
		super('birdPath', Object.assign({
			x: 0,
			y: 0,
			only_once: false,
			onlyIfLeft: false,
			speedMult: 1.0,
			nodes: []
		}, data), id);
	}
}

BirdPath.sprite = {
	path: 'characters/bird/flyup00'
};

module.exports = BirdPath;