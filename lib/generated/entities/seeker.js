// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a seeker, which is implemented by the underlying C# class `Seeker`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the seeker
 * @example
 * // create a seeker
 * const { Entity } = require('lucid-dream');
 * const seeker = Entity.createSeeker({});
 * @returns {Entity} The new seeker
 */
module.exports = function createSeeker(data = {}) {
	return new (require('../../class/Entity'))('seeker', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};