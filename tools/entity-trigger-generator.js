const fs = require('fs').promises;
const mkdirp = require('mkdirp');
const path = require('path');
const rmfr = require('rmfr');
const template = require('lodash.template');
const { capFirst, safeName } = require('../lib/utils');

const compiled = template(`const Entity = require('../Entity');

class <%= capName %> extends Entity {
	/**
	 * Creates an instance of {@link <%= capName %>}, which is implemented by the underlying C# class<%= suffix %> <%= classes %> in Celeste.
	 * @constructor
	 * @extends <%= type %>
	 * @param {Object} [data={}] - An object containing the attributes of the {@link <%= capName %>} to be created
	 */
	constructor(data = {}) {
		return new Entity('<%= name %>', Object.assign({
			// fill in default property key/values specific to this <%= type %>
		}, data));
	}
}

module.exports = <%= capName %>;
`.trim());

const genDir = path.join(__dirname, '..', 'lib', 'api');
const dirs = {
	Entity: path.join(genDir, 'entities'),
	Trigger: path.join(genDir, 'triggers')
};

(async function() {
	const data = await fs.readFile(path.join(__dirname, 'Level.cs'), 'utf8');
	const lines = data.split('\n').map(l => l.trim());
	let type = 'Entity';
	let current;

	await rmfr(dirs.Entity);
	await rmfr(dirs.Trigger);
	await mkdirp(dirs.Entity);
	await mkdirp(dirs.Trigger);

	// manual entries
	await fs.writeFile(path.join(dirs.Entity, 'Player.js'), compiled({
		name: 'player',
		suffix: '',
		classes: [ 'Player' ],
		type: 'Entity',
		capName: 'Player'
	}));

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
				current.capName = capFirst(current.name);
				current.suffix = current.classes.length > 1 ? 'es' : '';
				current.classes = current.classes.map(c => `\`${c}\``).join(', ');
				await fs.writeFile(path.join(dirs[current.type], filename), compiled(current));
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

	console.log('done.');
})();
