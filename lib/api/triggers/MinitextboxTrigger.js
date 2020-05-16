const Entity = require('../Entity');

class MinitextboxTrigger extends Entity {
	/**
	 * Creates an instance of {@link MinitextboxTrigger}, which is implemented by the underlying C# class `MiniTextboxTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link MinitextboxTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('minitextboxTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = MinitextboxTrigger;