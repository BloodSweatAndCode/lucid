const parser = require('../parser');
const Apply = require('./Apply');
const Decal = require('./Decal');
const Effect = require('./Effect');
const Entity = require('./Entity');
const Filler = require('./Filler');
const ObjectTiles = require('./ObjectTiles');
const Parallax = require('./Parallax');
const Room = require('./Room');
const Style = require('./Style');
const Tiles = require('./Tiles');
const Trigger = require('./Trigger');
const { attributes, children, findChildWithName } = require('../utils');

class Map {
	/**
	 * Create a Map instance
	 * @constructor
	 * @param {Object} [data={}] - An object defining the properties of the map
	 * @param {String} [data.package='lucid'] - The name of the mod package
	 * @param {Object} [data.rooms=[]] - An Array of {@link Room} instances
	 * @param {Style} [data.style=new Style()] - A {@link Style} instance
	 * @param {Object} [data.fillers=[]] - An Array of {@link Filler} instances
	 * @example
	 * // returns a new Map
	 * const { Map, Room } = require('lucid-dream');
	 * const map = new Map({
	 *   package: 'mypackage',
	 *   rooms: [ new Room([ 0, 0 ]) ]
	 * });
	 */
	constructor(data = {}) {
		Object.assign(this, {
			package: 'lucid',
			rooms: [],
			style: new Style(),
			fillers: []
		}, data);
	}

	/**
	 * Decodes a map from a `.bin` file
	 * @param {String} file - The path to the `.bin` file to decode
	 * @example
	 * // decodes a map
	 * const { Map } = require('lucid-dream');
	 * const map = new Map();
	 * const decodedMap = await map.decode('/path/to/my-map.bin');
	 * @returns {Object} The decoded map data
	 */
	async decode(file) {
		const data = await parser.bin.decode(file);
		const pkg = data._package;
		const roomsData = findChildWithName(data, 'levels');
		const style = findChildWithName(data, 'Style');
		const fgStyle = loadBackdrops(findChildWithName(style, 'Foregrounds'));
		const bgStyle = loadBackdrops(findChildWithName(style, 'Backgrounds'));
		const fillerRects = loadFillerRects(findChildWithName(data, 'Filler'));

		const rooms = children(roomsData).reduce((a,c) => {
			a.push(loadRoom(c));
			return a;
		}, []);

		// update the map with the decode data
		Object.assign(this, {
			package: pkg,
			rooms,
			style: new Style(fgStyle, bgStyle),
			fillers: fillerRects
		});

		// return the decoded data
		return data;
	}

	/**
	 * Encodes map data to a `.bin` file
	 * @param {Object} data - {@link Map} data
	 * @param {String} file - The path to the `.bin` file to which to encode
	 * @example
	 * // encodes a map to a .bin file
	 * const { Map } = require('lucid-dream');
	 * const map = new Map();
	 * await map.decode('/path/to/my-map.bin');
	 * // make your changes to the map
	 * await map.encode(map.data, '/path/to/my-new-map.bin');
	 * @returns {null}
	 */
	async encode(data, file) {
		await parser.bin.encode(this.toDict(), file);
	}

	/**
	 * Encode a map into a dictionary
	 * @example
	 * // returns encoded map dictionary
	 * const { Map } = require('lucid-dream');
	 * const map = new Map();
	 * map.toDict();
	 * @returns {Object} An object containing the encoded map dicitonary
	 */
	toDict() {
		return {
			_package: this.package,
			__name: 'Map',
			__children: [
				{
					__name: 'levels',
					__children: this.rooms.map(r => r.toDict())
				},
				{
					__name: 'Style',
					__children: this.style.toDict()
				},
				{
					__name: 'Filler',
					__children: this.fillers.map(f => f.toDict())
				}
			]
		};
	}

}

/*********************/
/* private functions */
/*********************/

function loadBackdrops(styleData) {
	const backdrops = [];

	for (let child of children(styleData)) {
		const styleType = child.__name;

		if (styleType === 'parallax') {
			backdrops.push(new Parallax(attributes(child)));
		} else if (styleType === 'apply') {
			const applyAttr = attributes(child);
			const parallax = [];

			for (let data of children(child)) {
				const typ = data.__name;
				if (typ === 'parallax') {
					parallax.push(new Parallax(attributes(data)));
				} else {
					parallax.push(new Effect(typ, attributes(data)));
				}
			}

			backdrops.push(new Apply(applyAttr, parallax));
		} else {
			backdrops.push(new Effect(styleType, attributes(child)));
		}
	}

	return backdrops;
}

function loadFillerRects(fillerData) {
	const fillers = [];

	for (let child of children(fillerData)) {
		fillers.push(new Filler(child.x, child.y, child.w, child.h));
	}

	return fillers;
}

function loadDecals(roomData, isFg = true) {
	const decals = [];
	const key = isFg ? 'fgdecals' : 'bgdecals';

	for (let child of children(findChildWithName(roomData, key))) {
		decals.push(new Decal(child.texture, {
			x: child.x,
			y: child.y,
			scaleX: child.scaleX,
			scaleY: child.scaleY
		}));
	}

	return decals;
}

function loadEntities(roomData, key) {
	const entities = [];
	const func = key === 'entities' ? Entity : Trigger;

	for (let child of (children(findChildWithName(roomData, key)))) {
		let id = child.id == null ? -1 : child.id;
		id = Number.isInteger(id) ? id : 0;
		delete child.id;

		const nodesRaw = children(child);

		if (nodesRaw && nodesRaw.length) {
			child.nodes = nodesRaw.reduce((a,c) => {
				a.push([c.x, c.y]);
				return a;
			}, []);
		}
		entities.push(new func(child.__name, attributes(child), id));
	}

	return entities;
}


function loadRoom(roomData) {
	const fgDecals = loadDecals(roomData, true);
	const bgDecals = loadDecals(roomData, false);

	const entities = loadEntities(roomData, 'entities');
	const triggers = loadEntities(roomData, 'triggers');

	const fgTilesRaw = findChildWithName(roomData, 'solids').innerText || '';
	const bgTilesRaw = findChildWithName(roomData, 'bg').innerText || '';
	const objTilesRaw = findChildWithName(roomData, 'objtiles').innerText || '';

	const fgTiles = new Tiles(fgTilesRaw);
	const bgTiles = new Tiles(bgTilesRaw);
	const objTiles = new ObjectTiles(objTilesRaw);

	const room = new Room([ roomData.x, roomData.y ], {
		name: roomData.name || 'lvl_1',
		size: [ roomData.width / 8, roomData.height / 8 ],
		entities,
		triggers,
		bgDecals,
		fgDecals,
		fgTiles,
		bgTiles,
		objTiles,
		musicLayer1: roomData.musicLayer1 || true,
		musicLayer2: roomData.musicLayer2 || true,
		musicLayer3: roomData.musicLayer3 || true,
		musicLayer4: roomData.musicLayer4 || true,
		musicProgress: roomData.musicProgress || '',
		ambienceProgress: roomData.ambienceProgress || '',
		dark: roomData.dark || false,
		space: roomData.space || false,
		underwater: roomData.underwater || false,
		whisper: roomData.whisper || false,
		disableDownTransition: roomData.disableDownTransition || false,
		delayAltMusicFade: roomData.delayAltMusicFade || false,
		music: roomData.music || 'music_oldsite_awake',
		altMusic: roomData.altMusic || '',
		windPattern: roomData.windPattern || 'None',
		color: roomData.c || 0,
		cameraOffsetX: roomData.cameraOffsetX || 0,
		cameraOffsetY: roomData.cameraOffsetY || 0
	});

	return room;
}

module.exports = Map;

