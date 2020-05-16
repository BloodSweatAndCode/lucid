const Entity = require('../Entity');

class BirdForsakenCityGem extends Entity {
	/**
	 * Creates an instance of {@link BirdForsakenCityGem}, which is implemented by the underlying C# class `ForsakenCitySatellite` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BirdForsakenCityGem} to be created
	 */
	constructor(data = {}) {
		return new Entity('birdForsakenCityGem', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BirdForsakenCityGem;