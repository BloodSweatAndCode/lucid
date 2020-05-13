const { safeName } = require('../utils');

class Dialog {
	constructor(data = {}) {
		Object.assign(this, data);
	}

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