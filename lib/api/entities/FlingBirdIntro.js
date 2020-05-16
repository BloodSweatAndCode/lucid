const Entity = require('../Entity');

class FlingBirdIntro extends Entity {
	/**
	 * Creates an instance of {@link FlingBirdIntro}, which is implemented by the underlying C# class `FlingBirdIntro` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link FlingBirdIntro} to be created
	 */
	constructor(data = {}) {
		return new Entity('flingBirdIntro', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FlingBirdIntro;