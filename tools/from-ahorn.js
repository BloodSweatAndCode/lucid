const fs = require('fs').promises;
const path = require('path');
const difference = require('lodash.difference');

const entityType = process.argv[2] || 'entity';
const config = {
	folder: entityType === 'entity' ? 'entities' : 'triggers',
	jl: entityType + '.jl',
	class: entityType === 'entity' ? 'Entity' : 'Trigger'
};

const mapleDir = path.join(__dirname, '..', '..', 'Maple');
const entityFile = path.join(mapleDir, 'src', config.jl);
const lucidDir = path.join(__dirname, '..', 'lib', 'api', config.folder);
let rxMapdef, rxPardef, rxLucid;
if (entityType === 'entity') {
	rxMapdef = /@mapdef\s+Entity\s+"([^"]+)"\s+([^(]+)/;
	rxPardef = /@pardef\s+([^(]+).+Entity\("([^"]+)"/;
	rxLucid = /new Entity\('([^']+)'/;
} else {
	rxMapdef = /@mapdef\s+Trigger\s+"([^"]+)"\s+([^(]+)/;
	rxPardef = /@pardef\s+([^(]+).+Trigger\("([^"]+)"/;
	rxLucid = /new Entity\('([^']+)'/;
}

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
		const match = data.match(rxLucid);
		if (match === null) {
			throw new Error(file + ' is invalid');
		}
		lucidEntities.push({ key: match[1], name: file.replace(/\.js$/, '') });
	}

	const diff1 = difference(entities.map(e => e.key), lucidEntities.map(e => e.key));
	console.log('maple', diff1);

	const diff2 = difference(lucidEntities.map(e => e.key), entities.map(e => e.key));
	console.log('lucid', diff2);
})();