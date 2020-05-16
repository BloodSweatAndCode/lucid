const blacklistedEntityAttrs = [ 'nodes' ];
global.globalEntityId = global.globalEntityId == null ? 0 : global.globalEntityId;

class Entity {
	/**
	 * Create an instance of Entity. This is not usually invoked directly. Typically to create an
	 * Entity, you'd use one of the subclasses attached to the {@link Lucid.Entity} namespace.
	 * @constructor
	 * @param {String} name - The name of the entity.
	 * @param {Object} data - An object containing the attributes and child nodes to define the entity.
	 * @param {Number} [id=globalEntityId++] - The id of the entity.
	 * @example
	 * // creates an entity
	 * const { Entity } = require('lucid-dream');
	 * const entity = new Entity('player', {}, 999);
	 */
	constructor(name, data, id) {
		this.name = name;
		this.data = data;
		this.id = id == null ? global.globalEntityId : id;

		if (this.id >= global.globalEntityId) {
			global.globalEntityId = this.id + 1;
		}
	}

	/**
	 * Encode a entity into a dictionary
	 * @example
	 * // returns encoded entity dictionary
	 * const { Entity } = require('lucid-dream');
	 * const entity = new Entity('spinner', {}, 123);
	 * entity.toDict();
	 * @returns {Object} An object containing the encoded entity dicitonary
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

module.exports = Entity;