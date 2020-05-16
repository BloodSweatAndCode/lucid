const path = require('path');
const Side = require('./Side');
const { safeName } = require('../utils');

class Chapter {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the chapter to be created
	 * @param {String} [data.name='Lucid Dream Chapter'] - The name of the chaper
	 * @param {Object} [sides={ A: new Side() }] - An object containing key/value pairs. The key indicates the name of the side (i.e., `A`, `B`, or `C`). The value is an instance of type {@link Side}.
	 * @example
	 * // Create a chapter with an empty A, B, and C side
	 * const { Chapter, Side } = require('lucid-dream');
	 * const chapter = new Chapter({
	 *   name: 'Chapter 1'
	 *   sides: {
	 *     A: new Side(),
	 *     B: new Side(),
	 *     C: new Side()
	 *   }
	 * });
	 */
	constructor(data = {}) {
		Object.assign(this, {
			name: 'Lucid Dream Chapter',
			sides: {
				A: new Side(),
				B: null,
				C: null
			}
		}, data);
	}

	/**
	 * Encode the chapter. This is usually done as part of {@link Mod#package}, but can also be directly to
	 * encode the `.bin` file(s) of the sides for an individual chapter.
	 * @param {String} mapDir - The directory in which to encode the chapter and its sides
	 * @example
	 * // Encode a chapter and its sides to the `outputDir` directory
	 * const { Chapter } = require('lucid-dream');
	 * const chapter = new Chapter({ name: 'My Chapter' });
	 * // make an additions to your chapter and sides
	 * await chapter.encode('outputDir');
	 * @returns {null}
	 */
	async package(mapDir) {
		if (!mapDir) {
			throw new Error(`Must specify a directory in which to encode chapter "${this.name}"`);
		}

		for (let sideKey of Object.keys(this.sides)) {
			const side = this.sides[sideKey];
			if (!side) {
				if (sideKey === 'A') {
					throw new Error(`No A-Side defined for chapter "${this.name}"`);
				}
				continue;
			}
			const sideFilename = safeName(this.name) + (sideKey === 'A' ? '' : '-' + sideKey.toUpperCase()) + '.bin';
			const sidePath = path.join(mapDir, sideFilename);
			await side.encode(sidePath);
		}
	}
}

module.exports = Chapter;