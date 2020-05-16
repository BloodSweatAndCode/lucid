// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a flutterbird, which is implemented by the underlying C# class `FlutterBird`.
 * @class
 * @extends Entity
 */
class Flutterbird extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the flutterbird
	 */
	constructor(data = {}) {
		return new Entity('flutterbird', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Flutterbird;