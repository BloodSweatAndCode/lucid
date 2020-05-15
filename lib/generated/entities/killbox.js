// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a killbox, which is implemented by the underlying C# class `Killbox`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the killbox
 * @example
 * // create a killbox
 * const { Entity } = require('lucid-dream');
 * const killbox = Entity.createKillbox({});
 * @returns {Entity} The new killbox
 */
module.exports = function createKillbox(data = {}) {
	return new (require('../../class/Entity'))('killbox', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};