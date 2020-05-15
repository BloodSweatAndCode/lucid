// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a chaserBarrier, which is implemented by the underlying C# class `ChaserBarrier`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the chaserBarrier
 * @example
 * // create a chaserBarrier
 * const { Entity } = require('lucid-dream');
 * const chaserBarrier = Entity.createChaserBarrier({});
 * @returns {Entity} The new chaserBarrier
 */
module.exports = function createChaserBarrier(data = {}) {
	return new (require('../../class/Entity'))('chaserBarrier', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};