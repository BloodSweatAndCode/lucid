const Entity = require('../Entity');

class SoundSource extends Entity {
	/**
	 * Creates an instance of {@link SoundSource}, which is implemented by the underlying C# class `SoundSourceEntity` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link SoundSource} to be created
	 */
	constructor(data = {}) {
		return new Entity('soundSource', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SoundSource;