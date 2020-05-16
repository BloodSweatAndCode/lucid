const Entity = require('../Entity');

class CrushBlock extends Entity {
	/**
	 * Creates an instance of {@link CrushBlock}, which is implemented by the underlying C# class `CrushBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CrushBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('crushBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CrushBlock;