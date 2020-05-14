const blacklistedEntityAttrs = [ 'nodes' ];
let globalEntityId = 0;

class Entity {
	/**
	 * Create an instance of Entity
	 * @constructor
	 * @param {String} name - The name of the entity.
	 * @param {Object} data - An object containing the attributes and child nodes to define the entity.
	 * @param {Number} [id=globalEntityId++] - The id of the entity.
	 * @example
	 * // creates an entity
	 * const { Entity } = require('lucid-dream');
	 * const entity = new Entity('player', {}, 999);
	 * @property {String} name - The name of the entity.
	 * @property {Object} data - An object containing the attributes and child nodes of the entity.
	 * @property {Number} [id=globalEntityId++] - The id of the entity.
	 */
	constructor(name, data, id) {
		this.name = name;
		this.data = data;
		this.id = id == null ? globalEntityId : id;

		if (this.id >= globalEntityId) {
			globalEntityId = this.id + 1;
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

/**
 * Create a spinner
 * @param {Object} [data] - An object containing the attributes to apply to the spinner
 * @param {Number} [data.x] - The x position of the spinner
 * @param {Number} [data.y] - The y position of the spinner
 * @param {Boolean} [data.attachToSolid=false] - Does this spinner attach to solids
 * @param {String} [data.color='Blue'] - The color of the spinner. valid values are `Blue`, `Red`, `Purple`, and `Rainbow`
 * @example
 * // create a spinner
 * const { Entity } = require('lucid-dream');
 * const spinner = new Entity.createSpinner({ x: 100, y: 100 });
 */
	static createSpinner(data = {}) {
		return new Entity('spinner', Object.assign({
			x: 0,
			y: 0,
			attachToSolid: false,
			color: 'Blue'
		}, data));
	}
}

module.exports = Entity;