// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a floatingDebris, which is implemented by the underlying C# class `FloatingDebris`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the floatingDebris
 * @example
 * // create a floatingDebris
 * const { Entity } = require('lucid-dream');
 * const floatingDebris = Entity.createFloatingDebris({});
 * @returns {Entity} The new floatingDebris
 */
module.exports = function createFloatingDebris(data = {}) {
	return new (require('../../class/Entity'))('floatingDebris', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};