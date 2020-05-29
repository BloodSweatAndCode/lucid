const Entity = require('../Entity');

class Bumper extends Entity {
	/**
	 * Creates an instance of {@link Bumper}, which is implemented by the underlying C# class `Bumper` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Bumper} to be created
	 * @param {Number} [data.x=0] - x position
	 * @param {Number} [data.y=0] - y position
	 * @param {Number} [id] - unique id of the entity
	 */
	constructor(data = {}, id) {
		super('bigSpinner', Object.assign({
			x: 0,
			y: 0
		}, data), id);
	}
}

Bumper.sprite = {
	path: 'objects/Bumper/Idle22'
};

module.exports = Bumper;