const Entity = require('../Entity');

class Wavedashmachine extends Entity {
	/**
	 * Creates an instance of {@link Wavedashmachine}, which is implemented by the underlying C# class `WaveDashTutorialMachine` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Wavedashmachine} to be created
	 */
	constructor(data = {}) {
		return new Entity('wavedashmachine', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Wavedashmachine;