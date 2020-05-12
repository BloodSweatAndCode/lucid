const path = require('path');
const { Map } = require('.');
const { children, dictAsEncodedData, loadDataAsDict } = require('../utils');

const decoderBlacklist = [ 'Filler', 'Style', 'levels' ];
const validExt = '.bin';
const validSides = [ 'B', 'C' ];

class Side {
	/**
	 * Creates a Side instance
	 * @constructor
	 * @param {Object} [opts={}] - Optional object that contains properties for the constructor
	 * @example
	 * // returns a Side
	 * const { Side } = require('lucid-dream');
	 * const side = new Side();
	 * @property {Map} map - The map for this side
	 * @property {Object} data - The metadata for the side
	 * @property {String} sideName - The name of this side, either `A`, `B`, or `C`
	 */
	constructor(data = {}) {
		Object.assign(this, {
			map: new Map(),
			data: {},
			sideName: 'A'
		}, data);
	}

	/**
	 * Load the map data and metadata for a side from a `.bin` file
	 * @param {String} file - The path to the `.bin` file to load
	 * @example
	 * const { Side } = require('lucid-dream');
	 * const side = new Side();
	 * await side.load('/path/to/my-map.bin');
	 * @returns {null}
	 */
	async decode(file) {

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
		this.data = loadMetadata.bind(this)(mapData);
	}

	/**
	 * Encodes a side to a file
	 * @param {String} file - The file to which to write the encoded side
	 * @example
	 * const { Side } = require('lucid-dream');
	 * const side = new Side();
	 * await side.load('/path/to/my-map.bin');
	 * // make changes to side/map/meta data
	 * await side.encode('/path/to/my-new-map.bin');
	 */
	async encode(file) {
		const data = this.map;
		encodeMetadata.bind(this)(data);
		await this.map.encode(data, file);
	}

}


/*********************/
/* private functions */
/*********************/

function loadMetadata(data) {
	const res = {};
	for (let child of children(data)) {
		if (!decoderBlacklist.includes(child.__name)) {
			loadDataAsDict(res, child);
		}
	}
	return res;
}

function encodeMetadata(target) {
	for (let [ key, value ] of Object.entries(this.data)) {
		target.__children.push(dictAsEncodedData(key, value));
	}
}

module.exports = Side;
