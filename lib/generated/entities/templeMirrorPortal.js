// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a templeMirrorPortal, which is implemented by the underlying C# class `TempleMirrorPortal`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the templeMirrorPortal
 * @example
 * // create a templeMirrorPortal
 * const { Entity } = require('lucid-dream');
 * const templeMirrorPortal = Entity.createTempleMirrorPortal({});
 * @returns {Entity} The new templeMirrorPortal
 */
module.exports = function createTempleMirrorPortal(data = {}) {
	return new (require('../../class/Entity'))('templeMirrorPortal', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};