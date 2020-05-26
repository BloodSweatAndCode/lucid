const fs = require('fs').promises;
const mkdirp = require('mkdirp');
const path = require('path');
const rmfr = require('rmfr');
const template = require('lodash.template');
const { capFirst, safeName } = require('../../../lib/utils');

const types = [ 'Entity', 'Trigger' ];

module.exports = async function() {
	const {
		celesteCodeDir,
		srcDir,
		apiDir,
		apiTestDir
	} = global.generateConfig;

	const dirs = types.reduce((a, type) => {
		const cap = capFirst(type);
		const dir = type === 'Entity' ? 'entities' : 'triggers';
		a[cap] = path.join(apiDir, dir);
		a[cap + 'Test'] = path.join(apiTestDir, dir);
		return a;
	}, {});

	const compiled = template(await fs.readFile(path.join(srcDir, 'lib', 'api', 'entities.ejs')));
	const compiledTest = template(await fs.readFile(path.join(srcDir, 'test', 'lib', 'api', 'entities.test.ejs')));

	// prep class and test dirs
	for (let key of Object.keys(dirs)) {
		await rmfr(dirs[key]);
		await mkdirp(dirs[key]);
	}

	// process Level.cs to extract entities
	const data = await fs.readFile(path.join(celesteCodeDir, 'Celeste', 'Level.cs'), 'utf8');
	const lines = data.split('\n').map(l => l.trim());
	let type = 'Entity';
	let current;

	// parse the Level.cs file to get the rest of the entities
	for (let line of lines) {
		// switch from entity to trigger entries
		if (line.indexOf('switch (trigger.Name)') !== -1) {
			type = 'Trigger';
			continue;
		}

		// find the next entity/trigger
		const match = line.match(/case\s+"([^"]+)"/);
		if (match !== null) {
			// generate a creation function for this entry
			if (current) {
				const filename = capFirst(safeName(current.name) + '.js');
				current.capName = capFirst(safeName(current.name));
				current.suffix = current.classes.length > 1 ? 'es' : '';
				current.classes = current.classes.map(c => `\`${c}\``).join(', ');
				current.multi = current.type === 'Entity' ? 'entities' : 'triggers';

				// write class and test
				await fs.writeFile(path.join(dirs[current.type], filename), compiled(current));
				await fs.writeFile(path.join(dirs[current.type + 'Test'], filename.replace(/\.js$/, '.test.js')), compiledTest(current));
			}
			// start a new entity/trigger entry
			current = {
				name: match[1],
				classes: [],
				type
			};
		}

		// find the C# classes associated with this entity/trigger entry
		if (current) {
			const match = line.match(/new\s+([^(]+)/);
			if (match !== null && !/[<>[\]]/.test(match[1])) {
				current.classes.push(match[1].trim());
			}
			continue;
		}
	}

	// manual entries
	const createEntry = (opts) => {
		if (typeof opts === 'string') {
			opts = { name: opts };
		}
		return Object.assign({}, {
			suffix: '',
			classes: [],
			type: 'Entity',
			capName: capFirst(opts.name),
			multi: 'entities'
		}, opts);
	};
	const entries = [
		{ name: 'player', classes: [ 'Player' ] },
		'darkChaserEnd',
		'everest/coreMessage',
		'everest/customBirdTutorial',
		'everest/npc',
		'everest/memorial',
		'everest/starClimbGraphicsController',
		'triggerSpikesOriginalDown',
		'triggerSpikesOriginalLeft',
		'triggerSpikesOriginalRight',
		'triggerSpikesOriginalUp'
	];

	for (let e of entries) {
		const entry = createEntry(e);
		await fs.writeFile(path.join(dirs.Entity, e.capName + '.js'), compiled(entry));
		await fs.writeFile(path.join(dirs.EntityTest, e.capName + '.test.js'), compiledTest(entry));
	}
};