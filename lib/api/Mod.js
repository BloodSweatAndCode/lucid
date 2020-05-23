const archiver = require('archiver');
const fsOld = require('fs');
const fs = require('fs').promises;
const YAML = require('yamljs');
const mkdirp = require('mkdirp');
const path = require('path');
const rmfr = require('rmfr');
const Dialog = require('./Dialog');
const { safeName } = require('../utils');

class Mod {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the Mod
	 * @param {String} [data.name='Lucid Dream Default'] - The name of the Mod
	 * @param {String} [data.version='0.0.1'] - The version of the Mod (X.Y.Z)
	 * @param {String} [data.author='Lucid Dream Author'] - The author of the Mod
	 * @param {Array} [data.dependencies=[ { name: 'Everest', version: '1.0.0' } ]] - An Array containing the dependencies of the Mod
	 * @param {Array} [data.chapters=[]] - An Array of {@link Chapter} instances
	 * @param {Dialog} [data.dialog=new Dialog()] - An instance of {@link Dialog}
	 * @example
	 * // create a Mod
	 * const { Mod } = require('lucid-dream');
	 * const mod = new Mod({ name: 'My Mod', author: 'BSAC' });
	 */
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

	/**
	 * Package the Mod to a format loadable by Celeste
	 * @param {String} outputDir - The directory to which to place the packaged Mod
	 * @example
	 * // package a Mod to the `output` directory
	 * const { Mod } = require('lucid-dream');
	 * const mod = new Mod({ name: 'Packaged Mod', author: 'iamdadbod' });
	 * // make any additional changes to the Mod
	 * await mod.package('output');
	 * @returns {null}
	 */
	async package(outputDir, opts = {}) {
		const { zip } = opts;
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
		const langTexts = this.dialog.encode(this);
		for (let [name, text] of Object.entries(langTexts)) {
			if (text !== '') {
				await fs.writeFile(path.join(dialogDir, `${name}.txt`), text);
			}
		}

		// encode all the chapters and sides
		for (let chapter of this.chapters) {
			await chapter.package(mapDir);
		}

		// zip the mod
		if (zip) {
			return new Promise((resolve, reject) => {
				const output = fsOld.createWriteStream(modDir + '.zip');
				const archive = archiver('zip', { zlib: { level: 9 } });
				output.on('close', resolve);
				output.on('error', reject);
				archive.pipe(output);
				archive.directory(modDir, false);
				archive.finalize();
			});
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