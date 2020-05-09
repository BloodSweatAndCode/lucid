const { Map } = require('.');
const { attributes, children } = require('../utils');
const decoderBlacklist = [ 'Filler', 'Style', 'levels' ];

class Side {
	constructor() {
		this.map = new Map();
		this.data = {};
	}

	async load(file) {
		const mapData = await this.map.decode(file);
		this.map.load(mapData);
		this.data = this.loadMetadata(mapData);
		// console.log(JSON.stringify(mapData, null, 2));
	}

	loadDataAsDict(target, data) {
		const name = data.__name;
		target[name] = {};

		for (let [ attr, value ] of attributes(data)) {
			target[name][attr] = value;
		}

		for (let child of children(data)) {
			this.loadDataAsDict(target[name], child);
		}
	}

	loadMetadata(data) {
		const res = {};

		for (let child of children(data)) {
			if (!decoderBlacklist.includes(child.__name)) {
				this.loadDataAsDict(res, child);
			}
		}

		return res;
	}

	dictAsEncodedData(name, data) {
		const res = {
			__name: name,
			__children: []
		};

		for (let [ key, value ] of Object.entries(data)) {
			if (!Array.isArray(value) && typeof value === 'object') {
				res.__children.push(this.dictAsEncodedData(key, value));
			} else {
				res[key] = value;
			}
		}

		if (!res.__children.length) {
			delete res.__children;
		}

		return res;
	}

	encodeMetadata(target, data) {
		for (let [ key, value ] of Object.entries(data)) {
			target.__children.push(this.dictAsEncodedData(key, value));
		}
	}

	async encode(file) {
		const data = this.map;
		this.encodeMetadata(data, this.data);
		return await this.map.encode(data, file);
	}
}

// function encodeSide(side::Side, outfile::String)
//     return encodeMap(Dict(side), outfile)
// end

// function Base.Dict(s::Side)
//     data = Dict(s.map)
//     encodeMetadata!(data, s.data)

//     return data
// end

module.exports = Side;
