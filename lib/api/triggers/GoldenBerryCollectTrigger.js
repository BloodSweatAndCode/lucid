const Entity = require('../Entity');

class GoldenBerryCollectTrigger extends Entity {
	/**
	 * Creates an instance of {@link GoldenBerryCollectTrigger}, which is implemented by the underlying C# class `GoldBerryCollectTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link GoldenBerryCollectTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('goldenBerryCollectTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = GoldenBerryCollectTrigger;