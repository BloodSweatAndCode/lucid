const Entity = require('../Entity');

class Lightbeam extends Entity {
	/**
	 * Creates an instance of {@link Lightbeam}, which is implemented by the underlying C# class `LightBeam` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Lightbeam} to be created
	 */
	constructor(data = {}) {
		return new Entity('lightbeam', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Lightbeam;