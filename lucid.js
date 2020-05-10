const config = require('./config');
const exec = require('util').promisify(require('child_process').exec);
const fs = require('fs').promises;
const os = require('os');
const { Entity, Side } = require('./lib/class');

(async function() {
	try {
		const side = new Side();
		await side.load(config.testMapFile);
		side.map.rooms[0].entities.push(new Entity('spinner', {
			x: 152,
			color: 'Blue',
			attachToSolid: false,
			y: 120
		}));

		await fs.writeFile('output/test.json', JSON.stringify(side, null, 2));

		await side.encode(config.testMapDstFile);

		// mac sucks and won't allow you to write a stream to a package (.app dir),
		// so we just copy the file from the output to the Mods dir
		if (os.platform() === 'darwin') {
			exec(`cp ${config.testMapDstFile} ${os.homedir() + '/Library/Application\\ Support/Steam/steamapps/common/Celeste/Celeste.app/Contents/MacOS/Mods'}`);
		}

		console.log('done');

		// await fs.writeFile('output/test.json', JSON.stringify(side, null, 2));
	} catch (err) {
		console.error(err.stack);
		process.exit(1);
	}
})();