const Entity = require('../Entity');

class FireBall extends Entity {
	/**
	 * Creates an instance of {@link FireBall}, which is implemented by the underlying C# class `FireBall` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link FireBall} to be created
	 */
	constructor(data = {}) {
		return new Entity('fireBall', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FireBall;