// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a rotateSpinner, which is implemented by the underlying C# classes `StarRotateSpinner`, `DustRotateSpinner`, `BladeRotateSpinner`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the rotateSpinner
 * @example
 * // create a rotateSpinner
 * const { Entity } = require('lucid-dream');
 * const rotateSpinner = Entity.createRotateSpinner({});
 * @returns {Entity} The new rotateSpinner
 */
module.exports = function createRotateSpinner(data = {}) {
	return new (require('../../class/Entity'))('rotateSpinner', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};