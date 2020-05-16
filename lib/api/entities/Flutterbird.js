const Entity = require('../Entity');

class Flutterbird extends Entity {
	/**
	 * Creates an instance of {@link Flutterbird}, which is implemented by the underlying C# class `FlutterBird` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Flutterbird} to be created
	 */
	constructor(data = {}) {
		return new Entity('flutterbird', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Flutterbird;