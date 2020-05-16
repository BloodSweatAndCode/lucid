const { safeName } = require('../utils');

/**
 * @class
 */
class Dialog {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes to add to the dialog
	 * @example
	 * // create a Dialog
	 * const { Dialog } = require('lucid-dream');
	 * const dialog = new Dialog();
	 */
	constructor(data = {}) {
		Object.assign(this, data);
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
		const english = {};

		// create dialog object
		const modRoot = ujoin(safeName(mod.name), safeName(mod.author));
		english[modRoot] = mod.name;
		for (let chapter of mod.chapters) {
			const chapterRoot = ujoin(modRoot, safeName(chapter.name));
			english[chapterRoot] = chapter.name;
		}

		// encode dialog txt
		let text = '';
		Object.keys(english).forEach(key => {
			const newVal = english[key].replace(/(?:\r\n|\r|\n)/g, '{n}');
			text += `${key}=${newVal}\n`;
		});

		return text;
	}
}

function ujoin(...args) {
	return args.join('_');
}

module.exports = Dialog;