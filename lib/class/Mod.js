const fs = require('fs').promises;
const YAML = require('json-to-pretty-yaml');
const mkdirp = require('mkdirp');
const path = require('path');
const rmfr = require('rmfr');
const { Dialog } = require('.');
const { safeName } = require('../utils');

class Mod {
	constructor(data = {}) {
		Object.assign(this, {
			name: 'Lucid Dream Default',
			version: '0.0.1',
			author: 'Lucid Dream Author',
			dependencies: [ { name: 'Everest', version: '1.0.0' } ],
			chapters: [],
			dialog: new Dialog()
		}, data);
	}

	async package(outputDir) {
		const { name, version, dependencies } = this;
		const modDir = path.join(outputDir, safeName(this.name));
		const dialogDir = path.join(modDir, 'Dialog');
		const mapDir = path.join(modDir, 'Maps', safeName(this.name), safeName(this.author));

		// prep mod dir
		await rmfr(modDir);
		await mkdirp(modDir);
		await mkdirp(mapDir);
		await mkdirp(dialogDir);

		// write the everest.yaml file
		const everestYaml = YAML.stringify(capitalizeKeys({ name, version, dependencies }));
		await fs.writeFile(path.join(modDir, 'everest.yaml'), everestYaml);

		// write the Dialog/English.txt
		const englishTxt = this.dialog.encode(this);
		if (englishTxt !== '') {
			await fs.writeFile(path.join(dialogDir, 'English.txt'), englishTxt);
		}

		// encode all the chapters and sides
		for (let chapter of this.chapters) {
			await chapter.package(mapDir);
		}
	}
}

function capitalizeKeys(o) {
	if (!o || typeof o !== 'object') { return; }
	if (Array.isArray(o)) {
		o.forEach(el => capitalizeKeys(el));
	} else {
		Object.keys(o).forEach(key => {
			const newKey = key.charAt(0).toUpperCase() + key.slice(1);
			o[newKey] = o[key];
			delete o[key];
			capitalizeKeys(o[newKey]);
		});
	}
	return o;
}

module.exports = Mod;