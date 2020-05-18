const ObjectTiles = require('./ObjectTiles');
const Tiles = require('./Tiles');

const blacklistedRoomAttrs = [
	'position',
	'size',
	'color',
	'fgDecals',
	'bgDecals',
	'fgTiles',
	'bgTiles',
	'objTiles',
	'entities',
	'triggers'
];

class Room {
	/**
	 * Create an instance of Room
	 * @param {Array} position - An array representing `[x,y]` position
	 * @param {Object} [data={}] - An object containing the attributes to define the room.
	 * @param {String} [data.name='lvl_1'] - Room name
	 * @param {Array} [data.size=[40,23]] - An array representing `[width,height]` size in tiles
	 * @param {Array} [data.entities=[]] - An array of {@link Entity} instances
	 * @param {Array} [data.triggers=[]] - An array of {@link Trigger} instances
	 * @param {Array} [data.bgDecals=[]] - An array of background {@link Decal} instances
	 * @param {Array} [data.fgDecals=[]] - An array of foreground {@link Decal} instances
	 * @param {Tiles} [data.bgTiles=new Tiles()] - A background {@link Tiles} instance
	 * @param {Tiles} [data.fgTiles=new Tiles()] - A foreground{@link Tiles} instance
	 * @param {Array} [data.objTiles=new ObjectTiles()] - A {@link ObjectTiles} instance
	 * @param {Boolean} [data.musicLayer1=true] - Is music layer 1 enabled?
	 * @param {Boolean} [data.musicLayer2=true] - Is music layer 2 enabled?
	 * @param {Boolean} [data.musicLayer3=true] - Is music layer 3 enabled?
	 * @param {Boolean} [data.musicLayer4=true] - Is music layer 4 enabled?
	 * @param {String} [data.musicProgress=''] - ??????????????
	 * @param {String} [data.ambienceProgress=''] - ?????????????
	 * @param {Boolean} [data.dark=false] - Is the room dark?
	 * @param {Boolean} [data.space=false] - Is this a space room?
	 * @param {Boolean} [data.underwater=false] - Is the room underwater?
	 * @param {Boolean} [data.whisper=false] - Does the whisper play in this room?
	 * @param {Boolean} [data.disableDownTransition=false] - Can Madeline transition down in this room?
	 * @param {Boolean} [data.delayAltMusicFade=false] - Does the alternative music fade get delayed?
	 * @param {String} [data.music='music_oldsite_awake'] - Room music track
	 * @param {String} [data.altMusic=''] - Room alternative music track
	 * @param {String} [data.windPattern='None'] - Wind pattern for the room
	 * @param {Number} [data.color=0] - Room color
	 * @param {Number} [data.cameraOffsetX=0] - Room's camera offset on x axis
	 * @param {Number} [data.cameraOffsetY=0] - Room's camera offset on y axis
	 * @example
	 * // returns a 40x23 tile room at position (0,0) with the name "Room 1"
	 * const { Room } = require('lucid-dream');
	 * const room = new Room([ 0, 0 ], {
	 *   name: 'Room 1'
	 * });
	 */
	constructor(position, data = {}) {
		Object.assign(this, {
			position,
			size: [ 40, 23 ],
			name: 'lvl_1',
			entities: [],
			triggers: [],
			bgDecals: [],
			fgDecals: [],
			bgTiles: new Tiles(),
			fgTiles: new Tiles(),
			objTiles: new ObjectTiles(),
			musicLayer1: true,
			musicLayer2: true,
			musicLayer3: true,
			musicLayer4: true,
			musicProgress: '',
			ambienceProgress: '',
			dark: false,
			space: false,
			underwater: false,
			whisper: false,
			disableDownTransition: false,
			delayAltMusicFade: false,
			music: 'music_oldsite_awake',
			altMusic: '',
			windPattern: 'None',
			color: 0,
			cameraOffsetX: 0,
			cameraOffsetY: 0
		}, data);

		// updateTileSize.bind(this)('0', '0');
	}

	get size() {
		return this._size;
	}

	set size(newSize) {
		this._size = newSize.map(s => s * 8);
	}

	/**
	 * Encode a room into a dictionary
	 * @example
	 * // returns encoded room dictionary
	 * const { Room } = require('lucid-dream');
	 * const room = new Room([ 0, 0 ], {
	 *   name: 'Room 1'
	 * });
	 * room.toDict();
	 * @returns {Object} An object containing the encoded room dicitonary
	 */
	toDict() {
		const res = {};

		for (let field of Object.keys(this)) {
			const value = this[field];
			if (!blacklistedRoomAttrs.includes(field)) {
				res[field] = value;
			}
		}

		res.__name = 'level';
		res.x = this.position[0];
		res.y = this.position[1];
		res.c = this.color;
		res.width = this.size[0];
		res.height = this.size[1];
		res.__children = [
			{
				__name: 'solids',
				innerText: this.fgTiles.minimizeTilesString('0', '')
			},
			{
				__name: 'bg',
				innerText: this.bgTiles.minimizeTilesString('0', '')
			},
			{
				__name: 'objtiles',
				// TODO: yuck
				innerText: this.bgTiles.minimizeTilesString.bind(this.objTiles)( -1, ',')
			},
			{
				__name: 'fgtiles',
				tileset: 'Scenery'
			},
			{
				__name: 'bgtiles',
				tileset: 'Scenery'
			},
			{
				__name: 'entities',
				__children: this.entities.map(e => e.toDict())
			},
			{
				__name: 'triggers',
				__children: this.triggers.map(t => t.toDict())
			},
			{
				__name: 'fgdecals',
				tileset: 'Scenery',
				__children: this.fgDecals.map(f => f.toDict())
			},
			{
				__name: 'bgdecals',
				tileset: 'Scenery',
				__children: this.bgDecals.map(b => b.toDict())
			}
		];

		return res;
	}
}

module.exports = Room;
