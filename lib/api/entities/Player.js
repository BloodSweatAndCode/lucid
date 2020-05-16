const Entity = require('../Entity');

class Player extends Entity {
	/**
	 * Creates an instance of {@link Player}, which is implemented by the underlying C# class Player in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Player} to be created
	 */
	constructor(data = {}) {
		return new Entity('player', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Player;