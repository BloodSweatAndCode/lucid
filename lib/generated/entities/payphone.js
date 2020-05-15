// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a payphone, which is implemented by the underlying C# class `Payphone`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the payphone
 * @example
 * // create a payphone
 * const { Entity } = require('lucid-dream');
 * const payphone = Entity.createPayphone({});
 * @returns {Entity} The new payphone
 */
module.exports = function createPayphone(data = {}) {
	return new (require('../../class/Entity'))('payphone', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};