// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a invisibleBarrier, which is implemented by the underlying C# class `InvisibleBarrier`.
 * @class
 * @extends Entity
 */
class InvisibleBarrier extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the invisibleBarrier
	 */
	constructor(data = {}) {
		return new Entity('invisibleBarrier', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = InvisibleBarrier;