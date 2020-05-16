const Entity = require('../Entity');

/**
 * Creates a templeMirrorPortal, which is implemented by the underlying C# class `TempleMirrorPortal`.
 * @class
 * @extends Entity
 */
class TempleMirrorPortal extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the templeMirrorPortal
	 */
	constructor(data = {}) {
		return new Entity('templeMirrorPortal', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TempleMirrorPortal;