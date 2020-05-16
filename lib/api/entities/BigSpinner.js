// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a bigSpinner, which is implemented by the underlying C# class `Bumper`.
 * @class
 * @extends Entity
 */
class BigSpinner extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the bigSpinner
	 */
	constructor(data = {}) {
		return new Entity('bigSpinner', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BigSpinner;