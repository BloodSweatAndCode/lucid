// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a fireBall, which is implemented by the underlying C# class `FireBall`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the fireBall
 * @example
 * // create a fireBall
 * const { Entity } = require('lucid-dream');
 * const fireBall = Entity.createFireBall({});
 * @returns {Entity} The new fireBall
 */
module.exports = function createFireBall(data = {}) {
	return new (require('../../class/Entity'))('fireBall', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};