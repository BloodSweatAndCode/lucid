const Entity = require('../Entity');

class Booster extends Entity {
	/**
	 * Creates an instance of {@link Booster}, which is implemented by the underlying C# class `Booster` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Booster} to be created
	 */
	constructor(data = {}, id) {
		super('booster', Object.assign({
			x: 0,
			y: 0,
			red: false,
			ch9_hub_booster: false
		}, data), id);
	}

	spritePath() {
		const { red } = this.data;
		return red ? 'objects/booster/boosterRed00' : 'objects/booster/booster00';
	}
}

module.exports = Booster;