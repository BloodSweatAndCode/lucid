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
	 * @param {Object} [data={}] - An object containing the attributes to define the room.
	 * @example
	 * // returns a room
	 * const { Room } = require('lucid-dream');
	 * const room = new Room();
	 * @property {String} [name='lvl_1'] - Room name
	 * @property {Array} position - An array representing `[x,y]` position
	 * @property {size} size - An array representing `[width,height]` size
	 * @property {Array} [entities=[]] - An array of {@link Entity} instances
	 * @property {Array} [triggers=[]] - An array of {@link Trigger} instances
	 * @property {Array} [bgDecals=[]] - An array of background {@link Decal} instances
	 * @property {Array} [fgDecals=[]] - An array of foreground {@link Decal} instances
	 * @property {Tiles} [bgTiles=new Tiles()] - A background {@link Tiles} instance
	 * @property {Tiles} [fgTiles=new Tiles()] - A foreground{@link Tiles} instance
	 * @property {Array} [objTiles=new ObjectTiles()] - A {@link ObjectTiles} instance
	 * @property {Boolean} [musicLayer1=true] - Is music layer 1 enabled?
	 * @property {Boolean} [musicLayer2=true] - Is music layer 2 enabled?
	 * @property {Boolean} [musicLayer3=true] - Is music layer 3 enabled?
	 * @property {Boolean} [musicLayer4=true] - Is music layer 4 enabled?
	 * @property {String} [musicProgress=''] - ??????????????
	 * @property {String} [ambienceProgress=''] - ?????????????
	 * @property {Boolean} [dark=false] - Is the room dark?
	 * @property {Boolean} [space=false] - Is this a space room?
	 * @property {Boolean} [underwater=false] - Is the room underwater?
	 * @property {Boolean} [whisper=false] - Does the whisper play in this room?
	 * @property {Boolean} [disableDownTransition=false] - Can Madeline transition down in this room?
	 * @property {Boolean} [delayAltMusicFade=false] - Does the alternative music fade get delayed?
	 * @property {String} [music='music_oldsite_awake'] - Room music track
	 * @property {String} [altMusic=''] - Room alternative music track
	 * @property {String} [windPattern='None'] - Wind pattern for the room
	 * @property {Number} [color=0] - Room color
	 * @property {Number} [cameraOffsetX=0] - Room's camera offset on x axis
	 * @property {Number} [cameraOffsetY=0] - Room's camera offset on y axis
	 */
	constructor(data = {}) {
		Object.assign(this, {
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

	/**
	 * Encode a room into a dictionary
	 * @example
	 * // returns encoded room dictionary
	 * const { Room } = require('lucid-dream');
	 * const room = new Room({ name: 'awesome-room' });
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

/*********************/
/* private functions */
/*********************/

// function updateTileSize(center = '0' /* , border = '0' */) {
// 	const [ width, height ] = this.size;
// 	const tw = Math.ceil(width / 8);
// 	const th = Math.ceil(height / 8);
// 	const objTiles = fill2dArray(-1, tw, th);

// 	let [ ftw, fth ] = this.fgTiles.size();
// 	ftw = Math.min(ftw, tw);
// 	fth = Math.min(fth, th);

// 	let [ btw, bth ] = this.bgTiles.size();
// 	btw = Math.min(btw, tw);
// 	bth = Math.min(bth, th);

// 	let [ otw, oth ] = this.objTiles.size();
// 	otw = Math.min(otw, tw);
// 	oth = Math.min(oth, th);

// 	const fg = fill2dArray(center, tw, th);
// 	const bg = fill2dArray(center, tw, th);

// 	copy2dArray(this.fgTiles.data, fg, fth, ftw);
// 	copy2dArray(this.bgTiles.data, bg, bth, btw);
// 	copy2dArray(this.objTiles.data, objTiles, oth, otw);

// 	this.fgTiles = new Tiles(fg);
// 	this.bgTiles = new Tiles(bg);
// 	this.objTiles = new ObjectTiles(objTiles);
// }

module.exports = Room;
