// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a wavedashmachine, which is implemented by the underlying C# class `WaveDashTutorialMachine`.
 * @class
 * @extends Entity
 */
class Wavedashmachine extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the wavedashmachine
	 */
	constructor(data = {}) {
		return new Entity('wavedashmachine', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Wavedashmachine;