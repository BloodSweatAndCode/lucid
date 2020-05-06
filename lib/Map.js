const Decal = require('./Decal');
const Filler = require('./Filler');
const MapReader = require('./MapReader');
const MapWriter = require('./MapWriter');
const { Apply, Effect, Parallax, Style } = require('./style');
const { attributes, children, findChildWithName } = require('./utils');

class Map {

	constructor() {
		this.file = null;
		this.data = null;
		this.package = '';
		this.rooms = [];
		this.style = null;
		this.fillers = [];
	}

	async decode(file) {
		this.file = file;
		const reader = new MapReader(this);
		await reader.readMap();
	}

	async encode(file) {
		const writer = new MapWriter(this);
		await writer.writeMap(file);
	}

	loadMap() {
		const { data } = this;
		const pkg = data._package;
		const roomsData = findChildWithName(data, 'levels');
		const style = findChildWithName(data, 'Style');
		const fgStyle = this.loadBackdrops(findChildWithName(style, 'Foregrounds'));
		const bgStyle = this.loadBackdrops(findChildWithName(style, 'Backgrounds'));
		const fillerRects = this.loadFillerRects(findChildWithName(data, 'Filler'));
		const rooms = loadRoom(children(roomsData));

		Object.assign(this, {
			package: pkg,
			rooms,
			style: new Style(fgStyle, bgStyle),
			fillers: fillerRects
		});

		return this;
	}

	loadBackdrops(styleData) {
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

	loadFillerRects(fillerData) {
		const fillers = [];

		for (let child of children(fillerData)) {
			fillers.push(new Filler(child.x, child.y, child.w, child.h));
		}

		return fillers;
	}

	loadDecals(roomData, isFg = true) {
		const decals = [];
		const key = isFg ? 'fgdecals' : 'bgdecals';

		for (let child of children(findChildWithName(roomData, key))) {
			decals.push(new Decal(child.texture, child.x, child.y, child.scaleX, child.scaleY));
		}

		return decals;
	}

// 	function loadEntities(roomData::Dict{String, Any}, constructor::Union{Type{Entity}, Type{Trigger}})
//     key = constructor == Entity ? "entities" : "triggers"
//     entities = constructor[]

//     for child in children(findChildWithName(Dict{String, Any}, roomData, key))
//         id = get(child, "id", -1)
//         id = isa(id, Integer) ? id : 0
//         delete!(child, "id")

//         nodesRaw = children(child)

//         if !isempty(nodesRaw)
//             child["nodes"] = Tuple{Integer, Integer}[(Int(node["x"]), Int(node["y"])) for node in nodesRaw]
//         end

//         push!(entities, constructor(child["__name"], attributes(child), id))
//     end

//     return entities
// end

	loadRoom(roomData) {
		const fgDecals = this.loadDecals(roomData, true);
		const bgDecals = this.loadDecals(roomData, false);

		const entities = loadEntities(roomData, );
	}




// function loadRoom(roomData::Dict{String, Any})
//     fgDecals = loadDecals(roomData, true)
//     bgDecals = loadDecals(roomData, false)

//     entities = loadEntities(roomData, Entity)
//     triggers = loadEntities(roomData, Trigger)

//     fgTilesRaw = get(findChildWithName(Dict{String, Any}, roomData, "solids"), "innerText", "")
//     bgTilesRaw = get(findChildWithName(Dict{String, Any}, roomData, "bg"), "innerText", "")
//     objTilesRaw = get(findChildWithName(Dict{String, Any}, roomData, "objtiles"), "innerText", "")

//     fgTiles = Tiles(fgTilesRaw)
//     bgTiles = Tiles(bgTilesRaw)
//     objTiles = ObjectTiles(objTilesRaw)

//     room = Room(
//         name = get(roomData, "name", "lvl_1"),

//         position = (roomData["x"], roomData["y"]),
//         size = (roomData["width"], roomData["height"]),

//         entities = entities,
//         triggers = triggers,

//         bgDecals = bgDecals,
//         fgDecals = fgDecals,

//         fgTiles = fgTiles,
//         bgTiles = bgTiles,
//         objTiles = objTiles,

//         musicLayer1 = get(roomData, "musicLayer1", true),
//         musicLayer2 = get(roomData, "musicLayer2", true),
//         musicLayer3 = get(roomData, "musicLayer3", true),
//         musicLayer4 = get(roomData, "musicLayer4", true),

//         musicProgress = string(get(roomData, "musicProgress", "")),
//         ambienceProgress = string(get(roomData, "ambienceProgress", "")),

//         dark = get(roomData, "dark", false),
//         space = get(roomData, "space", false),
//         underwater = get(roomData, "underwater", false),
//         whisper = get(roomData, "whisper", false),
//         disableDownTransition = get(roomData, "disableDownTransition", false),

//         delayAltMusicFade = get(roomData, "delayAltMusicFade", false),

//         music = get(roomData, "music", "music_oldsite_awake"),
//         altMusic = get(roomData, "alt_music", ""),

//         windPattern = get(roomData, "windPattern", "None"),

//         color = get(roomData, "c", 0),

//         cameraOffsetX = get(roomData, "cameraOffsetX", 0),
//         cameraOffsetY = get(roomData, "cameraOffsetY", 0)
//     )

//     updateTileSize!(room, '0', '0')

//     return room
// end

}

module.exports = Map;

