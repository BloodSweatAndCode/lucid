// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a wallBooster, which is implemented by the underlying C# class `WallBooster`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the wallBooster
 * @example
 * // create a wallBooster
 * const { Entity } = require('lucid-dream');
 * const wallBooster = Entity.createWallBooster({});
 * @returns {Entity} The new wallBooster
 */
module.exports = function createWallBooster(data = {}) {
	return new (require('../../class/Entity'))('wallBooster', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};