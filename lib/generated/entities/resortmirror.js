// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a resortmirror, which is implemented by the underlying C# class `ResortMirror`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the resortmirror
 * @example
 * // create a resortmirror
 * const { Entity } = require('lucid-dream');
 * const resortmirror = Entity.createResortmirror({});
 * @returns {Entity} The new resortmirror
 */
module.exports = function createResortmirror(data = {}) {
	return new (require('../../class/Entity'))('resortmirror', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};