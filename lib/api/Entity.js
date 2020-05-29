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
	 * Gets the sprite path for the entity. Entities with multiple modes or states
	 * will have multiple possible paths.
	 * @param
	 */
	spritePath() {
		if (this.constructor.sprite && this.constructor.sprite.path) {
			return this.constructor.sprite.path;
		} else {
			return null;
		}
	}

	/**
	 * Draw an entity
	 * @param {Object} ctx - Canvas context to use for rendering
	 * @param {Object} imgData - The source Celeste PNG data
	 * @param {Object} imgData.img - Canvas Image object loaded with source Celeste PNG data
	 * @param {Object} imgData.meta - Metadata for the `imgData.img` image
	 * @param {Room} room - {@link Room} in which the entity is contained
	 * @example
	 * // draw entity to a canvas
	 * const { Entity, Room } = require('lucid-dream');
	 * const room = new Room([ 0, 0 ]);
	 * const entity = new Entity.Player({ x: 20, y: 176 });
	 *
	 * // assuming you have a <canvas> element accessible...
	 * const canvas = $('canvas');
	 * const ctx = canvas.getContext('2d');
	 *
	 * // `imgData` needs to be extracted from the Gameplay.meta file and is too complicated
	 * // to detail here. For full source of how this extraction works, see
	 * // https://github.com/tonylukasavage/dream-smith/blob/master/workers/extract.js
	 * const imgData = {};
	 *
	 * entity.draw(ctx, imgData, room);
	 * @returns {null}
	 */
	draw(ctx, imgData, room, path = this.spritePath()) {
		if (path == null) {
			throw new Error(`No sprite path for entity ${JSON.stringify(this)}`);
		}
		const { rx = 0.5, ry = 0.5 } = this.constructor.sprite || {};
		this.drawSprite(ctx, imgData, room, { path, rx, ry });
	}

	drawSprite(ctx, imgData, room, spriteObj) {
		const { path, rx = 0.5, ry = 0.5 } = spriteObj;
		const { x, y, width, height, offestX, offsetY, realWidth, realHeight } = imgData.meta[path].sprite;
		ctx.imageSmoothingEnabled = false;
		ctx.drawImage(
			imgData.img,
			x,
			y,
			width,
			height,
			Math.floor(room.position[0] + this.data.x - (realWidth * rx + offestX)),
			Math.floor(room.position[1] + this.data.y - (realHeight * ry + offsetY)),
			width,
			height
		);
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

Entity.defaultBlockWidth = 16;
Entity.defaultBlockHeight = 16;
Entity.defaultSpikeWidth = 8;
Entity.defaultSpikeHeight = 8;

module.exports = Entity;