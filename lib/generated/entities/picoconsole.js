// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a picoconsole, which is implemented by the underlying C# class `PicoConsole`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the picoconsole
 * @example
 * // create a picoconsole
 * const { Entity } = require('lucid-dream');
 * const picoconsole = Entity.createPicoconsole({});
 * @returns {Entity} The new picoconsole
 */
module.exports = function createPicoconsole(data = {}) {
	return new (require('../../class/Entity'))('picoconsole', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};