const Entity = require('../Entity');

class GoldenBlock extends Entity {
	/**
	 * Creates an instance of {@link GoldenBlock}, which is implemented by the underlying C# class `GoldenBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link GoldenBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('goldenBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = GoldenBlock;