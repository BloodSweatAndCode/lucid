const Entity = require('../Entity');

class Dreammirror extends Entity {
	/**
	 * Creates an instance of {@link Dreammirror}, which is implemented by the underlying C# class `DreamMirror` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Dreammirror} to be created
	 */
	constructor(data = {}) {
		return new Entity('dreammirror', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Dreammirror;