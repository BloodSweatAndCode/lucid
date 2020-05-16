const Entity = require('../Entity');

class LookoutBlocker extends Entity {
	/**
	 * Creates an instance of {@link LookoutBlocker}, which is implemented by the underlying C# class `LookoutBlocker` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link LookoutBlocker} to be created
	 */
	constructor(data = {}) {
		return new Entity('lookoutBlocker', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = LookoutBlocker;