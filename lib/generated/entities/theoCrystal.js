// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a theoCrystal, which is implemented by the underlying C# class `TheoCrystal`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the theoCrystal
 * @example
 * // create a theoCrystal
 * const { Entity } = require('lucid-dream');
 * const theoCrystal = Entity.createTheoCrystal({});
 * @returns {Entity} The new theoCrystal
 */
module.exports = function createTheoCrystal(data = {}) {
	return new (require('../../class/Entity'))('theoCrystal', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};