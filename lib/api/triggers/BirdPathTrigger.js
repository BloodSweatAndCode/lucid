const Entity = require('../Entity');

class BirdPathTrigger extends Entity {
	/**
	 * Creates an instance of {@link BirdPathTrigger}, which is implemented by the underlying C# class `BirdPathTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BirdPathTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('birdPathTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = BirdPathTrigger;