// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a fakeWall, which is implemented by the underlying C# class `FakeWall`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the fakeWall
 * @example
 * // create a fakeWall
 * const { Entity } = require('lucid-dream');
 * const fakeWall = Entity.createFakeWall({});
 * @returns {Entity} The new fakeWall
 */
module.exports = function createFakeWall(data = {}) {
	return new (require('../../class/Entity'))('fakeWall', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};