const Entity = require('../Entity');

class Player extends Entity {
	/**
	 * Creates an instance of {@link Player}, which is implemented by the underlying C# class Player in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Player} to be created
	 * @param {Number} [data.x=0] - x position
	 * @param {Number} [data.y=0] - y position
	 * @param {Number} [id] - unique id of the entity
	 */
	constructor(data = {}, id) {
		super('player', Object.assign({
			x: 0,
			y: 0
		}, data), id);
	}
}

Player.sprite = {
	path: 'characters/player/sitDown00',
	ry: 1
};

module.exports = Player;