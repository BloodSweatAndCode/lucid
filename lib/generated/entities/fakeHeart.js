// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a fakeHeart, which is implemented by the underlying C# class `FakeHeart`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the fakeHeart
 * @example
 * // create a fakeHeart
 * const { Entity } = require('lucid-dream');
 * const fakeHeart = Entity.createFakeHeart({});
 * @returns {Entity} The new fakeHeart
 */
module.exports = function createFakeHeart(data = {}) {
	return new (require('../../class/Entity'))('fakeHeart', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};