const Entity = require('../Entity');

class SoundTest3D extends Entity {
	/**
	 * Creates an instance of {@link SoundTest3D}, which is implemented by the underlying C# class `_3dSoundTest` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link SoundTest3D} to be created
	 */
	constructor(data = {}) {
		return new Entity('SoundTest3d', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SoundTest3D;