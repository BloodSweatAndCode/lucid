const Entity = require('../Entity');

class Picoconsole extends Entity {
	/**
	 * Creates an instance of {@link Picoconsole}, which is implemented by the underlying C# class `PicoConsole` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Picoconsole} to be created
	 */
	constructor(data = {}) {
		return new Entity('picoconsole', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Picoconsole;