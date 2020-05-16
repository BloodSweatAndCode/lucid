const Entity = require('../Entity');

class Clothesline extends Entity {
	/**
	 * Creates an instance of {@link Clothesline}, which is implemented by the underlying C# class `Clothesline` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Clothesline} to be created
	 */
	constructor(data = {}) {
		return new Entity('clothesline', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Clothesline;