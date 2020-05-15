// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a bigSpinner, which is implemented by the underlying C# class `Bumper`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the bigSpinner
 * @example
 * // create a bigSpinner
 * const { Entity } = require('lucid-dream');
 * const bigSpinner = Entity.createBigSpinner({});
 * @returns {Entity} The new bigSpinner
 */
module.exports = function createBigSpinner(data = {}) {
	return new (require('../../class/Entity'))('bigSpinner', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};