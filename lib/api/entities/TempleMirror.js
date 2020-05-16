const Entity = require('../Entity');

/**
 * Creates a templeMirror, which is implemented by the underlying C# class `TempleMirror`.
 * @class
 * @extends Entity
 */
class TempleMirror extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the templeMirror
	 */
	constructor(data = {}) {
		return new Entity('templeMirror', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TempleMirror;