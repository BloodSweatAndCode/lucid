const fs = require('fs').promises;
const path = require('path');

const config = global.generateConfig = {
	celesteCodeDir: '/Users/tony/development/Celeste-dis',
	apiDir: path.join(__dirname, '..', '..', 'lib', 'api'),
	apiTestDir: path.join(__dirname, '..', '..', 'test', 'lib', 'api'),
	srcDir: path.join(__dirname, '..', '..', 'src'),
	typeDir: path.join(__dirname, 'types')
};

(async function() {
	try {
		// get a list of valid generate types
		const validTypes = (await fs.readdir(config.typeDir))
			.filter(f => /\.js$/.test(f))
			.map(f => f.replace(/\.js$/, ''));
		validTypes.push('all');

		const type = process.argv[2];
		if (!type) {
			throw new Error(`must specify type to generate. Valid types: ${validTypes}`);
		} else if (!validTypes.includes(type)) {
			throw new Error(`invalid generate type "${type}". Valid types: ${validTypes}`);
		}

		// determine which type(s) we are generating
		const types = [];
		if (type === 'all') {
			types.push(...validTypes);
		} else {
			types.push(type);
		}

		// generate the files
		for (let genType of types) {
			console.log(`* generating ${genType}...`);
			const genMod = require(`./types/${genType}`);
			await genMod();
		}

		console.log('done.');
	} catch (err) {
		console.error(err.stack);
		process.exit(1);
	}


})();