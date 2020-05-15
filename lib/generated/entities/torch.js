// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a torch, which is implemented by the underlying C# class `Torch`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the torch
 * @example
 * // create a torch
 * const { Entity } = require('lucid-dream');
 * const torch = Entity.createTorch({});
 * @returns {Entity} The new torch
 */
module.exports = function createTorch(data = {}) {
	return new (require('../../class/Entity'))('torch', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};