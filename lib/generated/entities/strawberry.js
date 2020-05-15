// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a strawberry, which is implemented by the underlying C# class `Strawberry`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the strawberry
 * @example
 * // create a strawberry
 * const { Entity } = require('lucid-dream');
 * const strawberry = Entity.createStrawberry({});
 * @returns {Entity} The new strawberry
 */
module.exports = function createStrawberry(data = {}) {
	return new (require('../../class/Entity'))('strawberry', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};