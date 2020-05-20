const { safeName } = require('../utils');

class Dialog {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the dialog
	 * @param {Array} [data.langs=[{ name: 'English', text: {} }]] - An Array of language objects
	 * @example
	 * // create a Dialog
	 * const { Dialog } = require('lucid-dream');
	 * const dialog = new Dialog();
	 */
	constructor(data = {}) {
		Object.assign(this, {
			langs: [
				{
					name: 'English',
					text: {}
				}
			]
		}, data);
	}

	/**
	 * Encode the Dialog instance into text suitable for an English.txt file
	 * @param {Mod} mod - The Mod object from which to encode Dialog data
	 * @example
	 * // encode Dialog data from a Mod object to text suitable for English.txt
	 * const { Mod } = require('lucid-dream');
	 * const mod = new Mod({ name: 'foo', author: 'bar' });
	 * const text = mod.dialog.encode(mod);
	 * @returns {String} Text data for an English.txt file
	 */
	encode(mod) {
		const ret = {};

		for (let lang of this.langs) {
			const { name, text } = lang;

			// create dialog object
			const modRoot = ujoin(safeName(mod.name), safeName(mod.author));
			text[modRoot] = mod.name;
			for (let chapter of mod.chapters) {
				const chapterRoot = ujoin(modRoot, safeName(chapter.name));
				text[chapterRoot] = chapter.name;
			}

			// encode dialog txt
			let output = '';
			Object.keys(text).forEach(key => {
				const newVal = text[key].replace(/(?:\r\n|\r|\n)/g, '{n}');
				output += `${key}=${newVal}\n`;
			});

			ret[name] = output;
		}

		return ret;
	}
}

function ujoin(...args) {
	return args.join('_');
}

module.exports = Dialog;