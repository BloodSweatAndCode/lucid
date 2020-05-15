// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a jumpThru, which is implemented by the underlying C# class `JumpthruPlatform`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the jumpThru
 * @example
 * // create a jumpThru
 * const { Entity } = require('lucid-dream');
 * const jumpThru = Entity.createJumpThru({});
 * @returns {Entity} The new jumpThru
 */
module.exports = function createJumpThru(data = {}) {
	return new (require('../../class/Entity'))('jumpThru', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};