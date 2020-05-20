const { config } = require('../../../lucid-dream');
const extract = require('../../../lib/extract');
const fs = require('fs').promises;
const path = require('path');
const template = require('lodash.template');
const { safeName } = require('../../../lib/utils');
const gameplayMetaPath = path.join(config.lucidDir, 'gameplayMeta.json');

module.exports = async function() {
	const {
		apiDir,
		srcDir
	} = global.generateConfig;
	const compiled = template(await fs.readFile(path.join(srcDir, 'lib', 'api', 'decals.ejs')));
	const compiledDecal = template(await fs.readFile(path.join(srcDir, 'lib', 'api', 'Decal.ejs')));

	// try to load cached metadata
	let json;
	try {
		json = JSON.parse(await fs.readFile(gameplayMetaPath, 'utf8'));
	} catch (err) {
		console.log('No gameplay meta cached, extracting...');
	}

	// ectract the metadata, then cache it
	if (!json) {
		json = await extract();
		await fs.writeFile(gameplayMetaPath, JSON.stringify(json, null, 2));
	}

	// find decals
	const decalGroups = Object.keys(json)
		.filter(k => k.indexOf('decals/') === 0)
		.map(k => k.replace(/^decals\//, ''))
		.reduce((a,c) => {
			const [ group, name ] = c.split('/');
			a[group] = a[group] ? a[group] : [];
			a[group].push({ name, key: `${group}\\\\${name}` });
			return a;
		}, {});

	let decals = '';
	for (let [group, value] of Object.entries(decalGroups)) {
		let newGroup = safeName(group.replace(/^\d+-/, ''), { capFirst: true });
		if (newGroup === 'Forsakencity') {
			newGroup = 'ForsakenCity';
		} else if (newGroup === 'Oldsite') {
			newGroup = 'OldSite';
		}
		if (group !== newGroup) {
			decalGroups[newGroup] = value;
			delete decalGroups[group];
		}

		decals += `/**
* namespace that holds all the names of the decals for ${newGroup}
* @namespace ${newGroup}
* @memberof Lucid.Decal
*/
Decal.${newGroup} = {};\n`;
		for (let { name, key } of value) {
			name = name.replace(/[\s-]/g, '_');
			decals += compiled({ group: newGroup, name, key }) + '\n';
		}
	}

	await fs.writeFile(path.join(apiDir, 'Decal.js'), compiledDecal({ decals }));
};