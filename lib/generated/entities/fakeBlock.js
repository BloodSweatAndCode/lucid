// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a fakeBlock, which is implemented by the underlying C# class `FakeWall`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the fakeBlock
 * @example
 * // create a fakeBlock
 * const { Entity } = require('lucid-dream');
 * const fakeBlock = Entity.createFakeBlock({});
 * @returns {Entity} The new fakeBlock
 */
module.exports = function createFakeBlock(data = {}) {
	return new (require('../../class/Entity'))('fakeBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};