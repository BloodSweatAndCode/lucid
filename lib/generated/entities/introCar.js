// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a introCar, which is implemented by the underlying C# class `IntroCar`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the introCar
 * @example
 * // create a introCar
 * const { Entity } = require('lucid-dream');
 * const introCar = Entity.createIntroCar({});
 * @returns {Entity} The new introCar
 */
module.exports = function createIntroCar(data = {}) {
	return new (require('../../class/Entity'))('introCar', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};