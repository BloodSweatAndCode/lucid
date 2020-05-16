const Entity = require('../Entity');

class BlackholeStrength extends Entity {
	/**
	 * Creates an instance of {@link BlackholeStrength}, which is implemented by the underlying C# class `BlackholeStrengthTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BlackholeStrength} to be created
	 */
	constructor(data = {}) {
		return new Entity('blackholeStrength', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = BlackholeStrength;