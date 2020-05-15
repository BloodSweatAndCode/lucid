// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a lockBlock, which is implemented by the underlying C# class `LockBlock`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the lockBlock
 * @example
 * // create a lockBlock
 * const { Entity } = require('lucid-dream');
 * const lockBlock = Entity.createLockBlock({});
 * @returns {Entity} The new lockBlock
 */
module.exports = function createLockBlock(data = {}) {
	return new (require('../../class/Entity'))('lockBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};