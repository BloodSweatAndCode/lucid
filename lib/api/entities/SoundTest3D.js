// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a SoundTest3d, which is implemented by the underlying C# class `_3dSoundTest`.
 * @class
 * @extends Entity
 */
class SoundTest3d extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the SoundTest3d
	 */
	constructor(data = {}) {
		return new Entity('SoundTest3d', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SoundTest3d;