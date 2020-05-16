const Entity = require('../Entity');

class Hanginglamp extends Entity {
	/**
	 * Creates an instance of {@link Hanginglamp}, which is implemented by the underlying C# class `HangingLamp` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Hanginglamp} to be created
	 */
	constructor(data = {}) {
		return new Entity('hanginglamp', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Hanginglamp;