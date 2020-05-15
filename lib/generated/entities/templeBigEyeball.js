// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a templeBigEyeball, which is implemented by the underlying C# class `TempleBigEyeball`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the templeBigEyeball
 * @example
 * // create a templeBigEyeball
 * const { Entity } = require('lucid-dream');
 * const templeBigEyeball = Entity.createTempleBigEyeball({});
 * @returns {Entity} The new templeBigEyeball
 */
module.exports = function createTempleBigEyeball(data = {}) {
	return new (require('../../class/Entity'))('templeBigEyeball', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};