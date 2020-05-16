const Entity = require('../Entity');

/**
 * Creates a player, which is implemented by the underlying C# class Player.
 * @class
 * @extends Entity
 */
class Player extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the player
	 */
	constructor(data = {}) {
		return new Entity('player', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Player;