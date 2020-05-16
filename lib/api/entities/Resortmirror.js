const Entity = require('../Entity');

class Resortmirror extends Entity {
	/**
	 * Creates an instance of {@link Resortmirror}, which is implemented by the underlying C# class `ResortMirror` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Resortmirror} to be created
	 */
	constructor(data = {}) {
		return new Entity('resortmirror', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Resortmirror;