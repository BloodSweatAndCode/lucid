// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a coreMessage, which is implemented by the underlying C# class `CoreMessage`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the coreMessage
 * @example
 * // create a coreMessage
 * const { Entity } = require('lucid-dream');
 * const coreMessage = Entity.createCoreMessage({});
 * @returns {Entity} The new coreMessage
 */
module.exports = function createCoreMessage(data = {}) {
	return new (require('../../class/Entity'))('coreMessage', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};