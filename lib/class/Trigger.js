const blacklistedEntityAttrs = [ 'nodes' ];

class Trigger {
	/**
	 * Creates a Trigger instance
	 * @constructor
	 * @param {String} name - The name of the Trigger
	 * @param {Object} data - An Object containing the attributes and child nodes to define this trigger
	 * @param {Number} id - The id of the trigger
	 * @example
	 * // returns a Trigger
	 * const { Trigger } = require('lucid');
	 * const trigger = new Trigger('my_trigger', {}, 1234);
	 * @property {String} name - The name of the trigger
	 * @property {Object} data - An Object containing the attributes and child nodes of this trigger
	 * @property {Number} id - The id of the trigger
	 */
	constructor(name, data, id) {
		this.name = name;
		this.data = data;
		this.id = id;
	}

	/**
	 * Encode a trigger into a dictionary
	 * @example
	 * // returns encoded trigger dictionary
	 * const { Trigger } = require('lucid');
	 * const trigger = new Trigger('foo', {}, 2222);
	 * trigger.toDict();
	 * @returns {Object} An object containing the encoded trigger dicitonary
	 */
	toDict() {
		const { data } = this;
		const res = {};
		res.__name = this.name;
		res.id = this.id;

		for (let [ key, value ] of Object.entries(data)) {
			if (!blacklistedEntityAttrs.includes(key)) {
				res[key] = value;
			}
		}

		if (data.nodes && data.nodes.length) {
			res.__children = [];

			for (let node of data.nodes) {
				res.__children.push({
					__name: 'node',
					x: node[0],
					y: node[1]
				});
			}
		}

		return res;
	}
}

module.exports = Trigger;