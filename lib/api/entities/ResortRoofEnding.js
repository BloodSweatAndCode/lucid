const Entity = require('../Entity');

class ResortRoofEnding extends Entity {
	/**
	 * Creates an instance of {@link ResortRoofEnding}, which is implemented by the underlying C# class `ResortRoofEnding` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link ResortRoofEnding} to be created
	 */
	constructor(data = {}) {
		return new Entity('resortRoofEnding', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ResortRoofEnding;