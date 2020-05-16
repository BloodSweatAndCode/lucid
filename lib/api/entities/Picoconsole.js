// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a picoconsole, which is implemented by the underlying C# class `PicoConsole`.
 * @class
 * @extends Entity
 */
class Picoconsole extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the picoconsole
	 */
	constructor(data = {}) {
		return new Entity('picoconsole', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Picoconsole;