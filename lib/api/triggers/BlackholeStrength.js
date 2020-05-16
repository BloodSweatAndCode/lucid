const Entity = require('../Entity');

/**
 * Creates a blackholeStrength, which is implemented by the underlying C# class `BlackholeStrengthTrigger`.
 * @class
 * @extends Trigger
 */
class BlackholeStrength extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the blackholeStrength
	 */
	constructor(data = {}) {
		return new Entity('blackholeStrength', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = BlackholeStrength;