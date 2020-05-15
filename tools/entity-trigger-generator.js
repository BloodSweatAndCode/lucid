const fs = require('fs').promises;
const mkdirp = require('mkdirp');
const path = require('path');
const rmfr = require('rmfr');
const template = require('lodash.template');
const { capFirst, safeName } = require('../lib/utils');

const compiled = template(`// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a <%= name %>, which is implemented by the underlying C# class<%= suffix %> <%= classes %>.
 * @augments <%= type %>
 * @param {Object} [data={}] - An Object containing the attributes of the <%= name %>
 * @example
 * // create a <%= name %>
 * const { <%= type %> } = require('lucid-dream');
 * const <%= name %> = <%= type %>.<%= funcName %>({});
 * @returns {Entity} The new <%= name %>
 */
module.exports = function <%= funcName %>(data = {}) {
	return new (require('../../class/<%= type %>'))('<%= name %>', Object.assign({
		// fill in default property key/values specific to this <%= type %>
	}, data));
};
`.trim());

const genDir = path.join(__dirname, '..', 'lib', 'generated');
const dirs = {
	entityIndex: path.join(genDir, 'entities', 'index.js'),
	triggerIndex: path.join(genDir, 'triggers', 'index.js'),
	Entity: path.join(genDir, 'entities'),
	Trigger: path.join(genDir, 'triggers')
};

const indexes = {
	Entity: '// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.\n\n',
	Trigger: '// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.\n\n'
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
				const filename = safeName(current.name) + '.js';
				current.funcName = 'create' + capFirst(current.name);
				current.suffix = current.classes.length > 1 ? 'es' : '';
				current.classes = current.classes.map(c => `\`${c}\``).join(', ');
				indexes[current.type] += `exports.${current.funcName} = require('./${filename}');\n`;
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
			if (match !== null && !/[<>\[\]]/.test(match[1])) {
				current.classes.push(match[1].trim());
			}
			continue;
		}
	}

	await fs.writeFile(dirs.entityIndex, indexes.Entity);
	await fs.writeFile(dirs.triggerIndex, indexes.Trigger);

	console.log('done.');
})();
