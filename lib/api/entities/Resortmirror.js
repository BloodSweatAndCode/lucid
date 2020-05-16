// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a resortmirror, which is implemented by the underlying C# class `ResortMirror`.
 * @class
 * @extends Entity
 */
class Resortmirror extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the resortmirror
	 */
	constructor(data = {}) {
		return new Entity('resortmirror', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Resortmirror;