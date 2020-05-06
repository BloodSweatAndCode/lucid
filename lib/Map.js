const { children, findChildWithName } = require('./utils');
const MapReader = require('./MapReader');
const MapWriter = require('./MapWriter');

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
		const fgStyle = loadBackdrops(findChildWithName(style, 'Foregrounds'));
		const bgStyle = loadBackdrops(findChildWithName(style, 'Backgrounds'));
		const fillerRects = loadFillerRects(findChildWithName(data, 'Filler'));
		const rooms = loadRoom(children(roomsData));

		Object.assign(this, {
			package: pkg,
			rooms,
			style: Style(fgStyle, bgStyle),
			fillers: fillerRects
		});

		return this;
	}

	loadBackdrops(styleData) {
		const backdrops = [];

		for (let child of children(styleData)) {
			const styleType = child.__name;
		}
	}

// 	function loadBackdrops(styleData::Dict{String, Any})
// 	backdrops = Backdrop[]

// 	for child in children(styleData)
// 			styleType = child["__name"]

// 			if styleType == "parallax"
// 					push!(backdrops, Parallax(attributes(child)))

// 			elseif styleType == "apply"
// 					applyAttr = attributes(child)
// 					parallax = Union{Parallax, Effect}[]

// 					for data in children(child)
// 							typ = data["__name"]
// 							if typ == "parallax"
// 									push!(parallax, Parallax(attributes(data)))

// 							else
// 									push!(parallax, Effect(typ, attributes(data)))
// 							end
// 					end

// 					push!(backdrops, Apply(applyAttr, parallax))

// 			else
// 					push!(backdrops, Effect(styleType, attributes(child)))
// 			end
// 	end

// 	return backdrops
// end


}

module.exports = Map;

