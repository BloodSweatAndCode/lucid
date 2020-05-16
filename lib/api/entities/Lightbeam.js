const Entity = require('../Entity');

/**
 * Creates a lightbeam, which is implemented by the underlying C# class `LightBeam`.
 * @class
 * @extends Entity
 */
class Lightbeam extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the lightbeam
	 */
	constructor(data = {}) {
		return new Entity('lightbeam', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Lightbeam;