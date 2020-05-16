const Entity = require('../Entity');

class Strawberry extends Entity {
	/**
	 * Creates an instance of {@link Strawberry}, which is implemented by the underlying C# class `Strawberry` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Strawberry} to be created
	 */
	constructor(data = {}) {
		return new Entity('strawberry', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Strawberry;