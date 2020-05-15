// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a flutterbird, which is implemented by the underlying C# class `FlutterBird`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the flutterbird
 * @example
 * // create a flutterbird
 * const { Entity } = require('lucid-dream');
 * const flutterbird = Entity.createFlutterbird({});
 * @returns {Entity} The new flutterbird
 */
module.exports = function createFlutterbird(data = {}) {
	return new (require('../../class/Entity'))('flutterbird', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};