// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a templeMirror, which is implemented by the underlying C# class `TempleMirror`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the templeMirror
 * @example
 * // create a templeMirror
 * const { Entity } = require('lucid-dream');
 * const templeMirror = Entity.createTempleMirror({});
 * @returns {Entity} The new templeMirror
 */
module.exports = function createTempleMirror(data = {}) {
	return new (require('../../class/Entity'))('templeMirror', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};