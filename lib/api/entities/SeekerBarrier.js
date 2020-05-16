const Entity = require('../Entity');

/**
 * Creates a seekerBarrier, which is implemented by the underlying C# class `SeekerBarrier`.
 * @class
 * @extends Entity
 */
class SeekerBarrier extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the seekerBarrier
	 */
	constructor(data = {}) {
		return new Entity('seekerBarrier', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SeekerBarrier;