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

const testCompiled = template(`
const <%= capName %> = require('../../../../lib/api/<%= multi %>/<%= capName %>');

describe('<%= multi %>/<%= capName %>', () => {

	it('creates an instance', () => {
		const inst = new <%= capName %>();
		inst.name.should.equal('<%= name %>');
	});

});
`.trim());

const genDir = path.join(__dirname, '..', 'lib', 'api');
const testDir = path.join(__dirname, '..', 'test', 'lib', 'api');

const dirs = {
	Entity: path.join(genDir, 'entities'),
	EntityTest: path.join(testDir, 'entities'),
	Trigger: path.join(genDir, 'triggers'),
	TriggerTest: path.join(testDir, 'triggers'),
};

(async function() {
	try {
		const data = await fs.readFile(path.join(__dirname, 'Level.cs'), 'utf8');
		const lines = data.split('\n').map(l => l.trim());
		let type = 'Entity';
		let current;

		// prep class and test dirs
		for (let key of Object.keys(dirs)) {
			await rmfr(dirs[key]);
			await mkdirp(dirs[key]);
		}

		// manual entries
		let manual = {
			name: 'player',
			suffix: '',
			classes: [ 'Player' ],
			type: 'Entity',
			capName: 'Player',
			multi: 'entities'
		};
		await fs.writeFile(path.join(dirs.Entity, 'Player.js'), compiled(manual));
		await fs.writeFile(path.join(dirs.EntityTest, 'Player.test.js'), testCompiled(manual));

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
					await fs.writeFile(path.join(dirs[current.type + 'Test'], filename.replace(/\.js$/, '.test.js')), testCompiled(current));
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
	} catch (err) {
		console.error(err.stack);
		process.exit(1);
	}
})();
