const Entity = require('../Entity');

class Oshirodoor extends Entity {
	/**
	 * Creates an instance of {@link Oshirodoor}, which is implemented by the underlying C# class `MrOshiroDoor` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Oshirodoor} to be created
	 */
	constructor(data = {}) {
		return new Entity('oshirodoor', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Oshirodoor;