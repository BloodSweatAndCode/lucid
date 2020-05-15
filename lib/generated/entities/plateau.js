// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a plateau, which is implemented by the underlying C# class `Plateau`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the plateau
 * @example
 * // create a plateau
 * const { Entity } = require('lucid-dream');
 * const plateau = Entity.createPlateau({});
 * @returns {Entity} The new plateau
 */
module.exports = function createPlateau(data = {}) {
	return new (require('../../class/Entity'))('plateau', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};