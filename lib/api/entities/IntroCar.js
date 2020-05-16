// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a introCar, which is implemented by the underlying C# class `IntroCar`.
 * @class
 * @extends Entity
 */
class IntroCar extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the introCar
	 */
	constructor(data = {}) {
		return new Entity('introCar', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = IntroCar;