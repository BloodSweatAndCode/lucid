// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a soundSource, which is implemented by the underlying C# class `SoundSourceEntity`.
 * @class
 * @extends Entity
 */
class SoundSource extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the soundSource
	 */
	constructor(data = {}) {
		return new Entity('soundSource', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SoundSource;