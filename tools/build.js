const fs = require('fs').promises;
const path = require('path');
const template = require('lodash.template');

const srcPath = path.join(__dirname, '..', 'src', 'lucid-dream.ejs');
const dstPath = path.join(__dirname, '..', 'lucid-dream.js');

const conf = [
	{
		key: 'classes',
		path: path.join(__dirname, '..', 'lib', 'api'),
		modPath: './lib/api',
		exclude: [ 'Entity.js', 'Trigger.js' ]
	},
	{
		key: 'entities',
		path: path.join(__dirname, '..', 'lib', 'api', 'entities'),
		modPath: './lib/api/entities',
		type: 'Entity'
	},
	{
		key: 'triggers',
		path: path.join(__dirname, '..', 'lib', 'api', 'triggers'),
		modPath: './lib/api/triggers',
		type: 'Trigger'
	}
];

const sort = function(o) {
	switch(o) {
	case 'Room.js':
	case 'Map.js':
	case 'Side.js':
	case 'Chapter.js':
	case 'Mod.js':
		return 'ZZZ' + o;
	default:
		return o;
	}
};

(async function() {
	const values = {};

	try {
		for (let c of conf) {
			const files = (await fs.readdir(c.path))
				.filter(f => /\.js$/.test(f))
				.filter(f => !(c.exclude || []).includes(f))
				.sort();

			if (c.key === 'classes') {
				files.sort((a,b) => (sort(a) < sort(b) ? -1 : sort(a) > sort(b) ? 1 : 0));
			}

			const array = [];
			for (let file of files) {
				const name = file.replace(/\.js$/, '');
				const prefix = `	/**
 	* @property {${name}} ${name} - The ${name} class
 	* @memberof Lucid${c.key === 'classes' ? '' : `.${c.type}`}
 	*/
`;
				array.push(`${prefix}\t${name}: require('${c.modPath}/${name}')`);
			}
			values[c.key] = array.join(',\n');
		}

		const src = await fs.readFile(srcPath, 'utf8');
		const output = template(src)(values);
		await fs.writeFile(dstPath, output);

		console.log(`lucid-dream.js built at ${dstPath}`);
	} catch (err) {
		console.error(err.stack);
		process.exit(1);
	}
})();