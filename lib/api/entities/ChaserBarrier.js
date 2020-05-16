// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a chaserBarrier, which is implemented by the underlying C# class `ChaserBarrier`.
 * @class
 * @extends Entity
 */
class ChaserBarrier extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the chaserBarrier
	 */
	constructor(data = {}) {
		return new Entity('chaserBarrier', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ChaserBarrier;