const Entity = require('../Entity');

class TempleMirror extends Entity {
	/**
	 * Creates an instance of {@link TempleMirror}, which is implemented by the underlying C# class `TempleMirror` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TempleMirror} to be created
	 */
	constructor(data = {}) {
		return new Entity('templeMirror', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TempleMirror;