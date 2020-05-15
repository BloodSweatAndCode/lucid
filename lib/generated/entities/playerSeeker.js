// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a playerSeeker, which is implemented by the underlying C# class `PlayerSeeker`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the playerSeeker
 * @example
 * // create a playerSeeker
 * const { Entity } = require('lucid-dream');
 * const playerSeeker = Entity.createPlayerSeeker({});
 * @returns {Entity} The new playerSeeker
 */
module.exports = function createPlayerSeeker(data = {}) {
	return new (require('../../class/Entity'))('playerSeeker', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};