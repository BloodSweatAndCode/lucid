// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a ridgeGate, which is implemented by the underlying C# class `RidgeGate`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the ridgeGate
 * @example
 * // create a ridgeGate
 * const { Entity } = require('lucid-dream');
 * const ridgeGate = Entity.createRidgeGate({});
 * @returns {Entity} The new ridgeGate
 */
module.exports = function createRidgeGate(data = {}) {
	return new (require('../../class/Entity'))('ridgeGate', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};