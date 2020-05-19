const { config } = require('../../../lucid-dream');
const extract = require('../../../lib/extract');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { safeName } = require('../../../lib/utils');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const gameplayMetaPath = path.join(config.lucidDir, 'gameplayMeta.json');

(async function() {
	let json;

	// try to load cached metadata
	try {
		json = JSON.parse(await readFile(gameplayMetaPath, 'utf8'));
	} catch (err) {
		// no cached file present
	}

	// ectract the metadata, then cache it
	if (!json) {
		json = await extract();
		await writeFile(gameplayMetaPath, JSON.stringify(json, null, 2));
	}

	// find decals
	const joiner = '\\';
	const decalGroups = Object.keys(json)
		.filter(k => k.indexOf('decals/') === 0)
		.map(k => k.replace(/^decals\//, ''))
		.reduce((a,c) => {
			const [ group, name ] = c.split('/');
			a[group] = a[group] ? a[group] : [];
			a[group].push({ name, key: `${group}\\${name}` });
			return a;
		}, {});

	let decals = '';
	for (let [key, value] of Object.entries(decalGroups)) {
		let newKey = safeName(key.replace(/^\d+-/, ''), { capFirst: true });
		if (newKey === 'Forsakencity') {
			newKey = 'ForsakenCity';
		} else if (newKey === 'Oldsite') {
			newKey = 'OldSite';
		}
		if (key !== newKey) {
			decalGroups[newKey] = value;
			delete decalGroups[key];
		}

		for (let { name, key } of value) {
			decals +=
		}

		// decalGroups[newKey] = decalGroups[newKey].map(name => {
		// 	return {
		// 		name,

		// 	}
		// });
	}
	console.log(decalGroups);

	// const decalKeys = Object.keys(json)
	// 	.filter(k => k.indexOf('decals/') === 0)
	// 	.map(k => k.replace(/^decals\//, ''))
	// 	.map(k => k.replace(/\//g, '\\'))
	// 	.sort();
	// const uniqueGroups = [ ...new Set(decalKeys.map(k => k.split('\\')[0]))].map(k => {
	// 	return {
	// 		fullname: k,
	// 		shortname: k.replace(/^\d+-/, '')

	// 	};
	// });
	// console.log(uniqueGroups);
})();

// [
//   { fullname: '0-prologue', shortname: 'prologue' },
//   { fullname: '1-forsakencity', shortname: 'forsakencity' },
//   { fullname: '10-farewell', shortname: 'farewell' },
//   { fullname: '2-oldsite', shortname: 'oldsite' },
//   { fullname: '3-resort', shortname: 'resort' },
//   { fullname: '4-cliffside', shortname: 'cliffside' },
//   { fullname: '5-temple-dark', shortname: 'temple-dark' },
//   { fullname: '5-temple', shortname: 'temple' },
//   { fullname: '6-reflection', shortname: 'reflection' },
//   { fullname: '7-summit', shortname: 'summit' },
//   { fullname: '8-epilogue', shortname: 'epilogue' },
//   { fullname: '9-core', shortname: 'core' },
//   { fullname: 'generic', shortname: 'generic' }
// ]