const path = require('path');
const { Map } = require('.');
const { children, dictAsEncodedData, loadDataAsDict } = require('../utils');

const decoderBlacklist = [ 'Filler', 'Style', 'levels' ];
const validExt = '.bin';
const validSides = [ 'B', 'C' ];

class Side {
	constructor() {
		this.map = new Map();
		this.data = {};
		this.sideName = '';
	}

	// decoding and encoding sides

	async load(file) {

		// ensure we received a proper file argument
		if (!file) {
			throw new Error('must provide a map file');
		}
		if (typeof file !== 'string') {
			throw new Error('map file argument must be a string');
		}

		// make sure file is an actual bin file
		const filename = path.basename(file);
		if (path.extname(file) !== validExt) {
			throw new Error(`invalid side file "${filename}", must have a .bin extension"`);
		}
		const basename = path.basename(file, validExt);
		const sideName = basename.split('-').pop();
		this.sideName = validSides.includes(sideName) ? sideName : 'A';

		// decode map data
		const mapData = await this.map.decode(file);
		this.map.load(mapData);
		this.data = this.loadMetadata(mapData);
	}

	async encode(file) {
		const data = this.map;
		this.encodeMetadata(data, this.data);
		return await this.map.encode(data, file);
	}

	loadMetadata(data) {
		const res = {};
		for (let child of children(data)) {
			if (!decoderBlacklist.includes(child.__name)) {
				loadDataAsDict(res, child);
			}
		}
		return res;
	}

	encodeMetadata(target, data) {
		for (let [ key, value ] of Object.entries(data)) {
			target.__children.push(dictAsEncodedData(key, value));
		}
	}

	// side API


}

module.exports = Side;
