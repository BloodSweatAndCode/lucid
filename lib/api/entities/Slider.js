const Entity = require('../Entity');

class Slider extends Entity {
	/**
	 * Creates an instance of {@link Slider}, which is implemented by the underlying C# class `Slider` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Slider} to be created
	 */
	constructor(data = {}) {
		return new Entity('slider', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Slider;