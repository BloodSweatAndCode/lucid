const Entity = require('../Entity');

/**
 * Creates a slider, which is implemented by the underlying C# class `Slider`.
 * @class
 * @extends Entity
 */
class Slider extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the slider
	 */
	constructor(data = {}) {
		return new Entity('slider', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Slider;