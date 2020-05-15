// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a spinner, which is implemented by the underlying C# classes `DustStaticSpinner`, `CrystalStaticSpinner`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the spinner
 * @example
 * // create a spinner
 * const { Entity } = require('lucid-dream');
 * const spinner = Entity.createSpinner({});
 * @returns {Entity} The new spinner
 */
module.exports = function createSpinner(data = {}) {
	return new (require('../../class/Entity'))('spinner', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};