// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a friendlyGhost, which is implemented by the underlying C# class `AngryOshiro`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the friendlyGhost
 * @example
 * // create a friendlyGhost
 * const { Entity } = require('lucid-dream');
 * const friendlyGhost = Entity.createFriendlyGhost({});
 * @returns {Entity} The new friendlyGhost
 */
module.exports = function createFriendlyGhost(data = {}) {
	return new (require('../../class/Entity'))('friendlyGhost', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};