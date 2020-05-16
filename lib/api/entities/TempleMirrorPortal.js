const Entity = require('../Entity');

class TempleMirrorPortal extends Entity {
	/**
	 * Creates an instance of {@link TempleMirrorPortal}, which is implemented by the underlying C# class `TempleMirrorPortal` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TempleMirrorPortal} to be created
	 */
	constructor(data = {}) {
		return new Entity('templeMirrorPortal', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TempleMirrorPortal;