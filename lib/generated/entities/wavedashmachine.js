// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a wavedashmachine, which is implemented by the underlying C# class `WaveDashTutorialMachine`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the wavedashmachine
 * @example
 * // create a wavedashmachine
 * const { Entity } = require('lucid-dream');
 * const wavedashmachine = Entity.createWavedashmachine({});
 * @returns {Entity} The new wavedashmachine
 */
module.exports = function createWavedashmachine(data = {}) {
	return new (require('../../class/Entity'))('wavedashmachine', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};