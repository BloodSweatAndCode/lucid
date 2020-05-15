// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a dreammirror, which is implemented by the underlying C# class `DreamMirror`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the dreammirror
 * @example
 * // create a dreammirror
 * const { Entity } = require('lucid-dream');
 * const dreammirror = Entity.createDreammirror({});
 * @returns {Entity} The new dreammirror
 */
module.exports = function createDreammirror(data = {}) {
	return new (require('../../class/Entity'))('dreammirror', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};