// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a templeGate, which is implemented by the underlying C# class `TempleGate`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the templeGate
 * @example
 * // create a templeGate
 * const { Entity } = require('lucid-dream');
 * const templeGate = Entity.createTempleGate({});
 * @returns {Entity} The new templeGate
 */
module.exports = function createTempleGate(data = {}) {
	return new (require('../../class/Entity'))('templeGate', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};