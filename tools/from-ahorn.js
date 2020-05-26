const fs = require('fs').promises;
const path = require('path');
const difference = require('lodash.difference');

const mapleDir = path.join(__dirname, '..', '..', 'Maple');
const entityFile = path.join(mapleDir, 'src', 'entity.jl');
const lucidDir = path.join(__dirname, '..', 'lib', 'api', 'entities');
const rxMapdef = /@mapdef\s+Entity\s+"([^"]+)"\s+([^(]+)/;
const rxPardef = /@pardef\s+([^(]+).+Entity\("([^"]+)"/;

(async function() {
	const entities = [];
	const lines = (await fs.readFile(entityFile, 'utf8')).split('\n');
	for (let line of lines) {
		let match = line.match(rxMapdef);
		if (match !== null) {
			entities.push({ key: match[1], name: match[2] });
			continue;
		}

		match = line.match(rxPardef);
		if (match !== null) {
			entities.push({ key: match[2], name: match[1] });
			continue;
		}
	}

	entities.sort((a,b) => a.name < b.name ? -1 : 1);

	const files = (await fs.readdir(lucidDir)).filter(f => /\.js$/.test(f));
	const lucidEntities = [];
	for (let file of files) {
		const data = await fs.readFile(path.join(lucidDir, file), 'utf8');
		const match = data.match(/new Entity\('([^']+)'/);
		if (match === null) {
			throw new Error(file + ' is invalid');
		}
		lucidEntities.push({ key: match[1], name: file.replace(/\.js$/, '') });
	}

	console.log(lucidEntities);
	console.log(lucidEntities.length);

	const diff1 = difference(entities.map(e => e.key), lucidEntities.map(e => e.key));
	console.log('maple', diff1);

	const diff2 = difference(lucidEntities.map(e => e.key), entities.map(e => e.key));
	console.log('lucid', diff2);
})();