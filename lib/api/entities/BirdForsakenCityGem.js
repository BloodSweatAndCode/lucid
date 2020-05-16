const Entity = require('../Entity');

/**
 * Creates a birdForsakenCityGem, which is implemented by the underlying C# class `ForsakenCitySatellite`.
 * @class
 * @extends Entity
 */
class BirdForsakenCityGem extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the birdForsakenCityGem
	 */
	constructor(data = {}) {
		return new Entity('birdForsakenCityGem', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BirdForsakenCityGem;