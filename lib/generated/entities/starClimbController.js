// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a starClimbController, which is implemented by the underlying C# class `StarJumpController`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the starClimbController
 * @example
 * // create a starClimbController
 * const { Entity } = require('lucid-dream');
 * const starClimbController = Entity.createStarClimbController({});
 * @returns {Entity} The new starClimbController
 */
module.exports = function createStarClimbController(data = {}) {
	return new (require('../../class/Entity'))('starClimbController', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};